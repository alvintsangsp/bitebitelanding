import { useMemo, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { getApprovedShowcaseEntries } from "@/data/showcase";
import { useTranslation } from "@/i18n/TranslationProvider";
import type { Language } from "@/i18n/languages";

const gameTypes = ["Puzzle", "Adventure", "Strategy", "Creative", "Sports", "Coding", "Other"];

const formSchema = z.object({
  gameName: z.string().min(1, "Please enter the game name."),
  description: z.string().min(10, "Please add a short description (at least 10 characters)."),
  gameType: z.string().min(1, "Please choose a game type."),
  displayName: z.string().min(1, "Please add the kid’s display name."),
  remixLink: z
    .string()
    .url("Please enter a valid URL.")
    .optional()
    .or(z.literal("")),
  parentEmail: z.string().email("Please enter a valid email."),
  additionalContact: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Parent or guardian consent is required." }),
  }),
  spamAnswer: z.string().min(1, "Please answer the spam check."),
});

type FormValues = z.infer<typeof formSchema>;

const Showcase = () => {
  const { t, language, dictionary } = useTranslation();
  const baseEntries = useMemo(
    () =>
      getApprovedShowcaseEntries().sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    [],
  );
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("ALL");

  const spamNumbers = useMemo(() => {
    const a = Math.floor(Math.random() * 5) + 3; // 3-7
    const b = Math.floor(Math.random() * 4) + 2; // 2-5
    return { a, b, answer: a + b };
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      gameName: "",
      description: "",
      gameType: "",
      displayName: "",
      remixLink: "",
      parentEmail: "",
      additionalContact: "",
      consent: undefined,
      spamAnswer: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (!selectedImage) {
      setImageError("Please upload a game picture.");
      return;
    }

    if (Number(values.spamAnswer.trim()) !== spamNumbers.answer) {
      form.setError("spamAnswer", { message: t("showcasePage.spamError") });
      return;
    }

    try {
      const remixLine = values.remixLink ? `Lovable Remix: ${values.remixLink}\n` : "";
      const additionalLine = values.additionalContact
        ? `Additional contact: ${values.additionalContact}\n`
        : "";

      const emailBody = encodeURIComponent(
        `New Showcase Submission\n\nGame Name: ${values.gameName}\nDescription: ${values.description}\nGame Type: ${values.gameType}\nKid Display Name: ${values.displayName}\n${remixLine}Parent Contact: ${values.parentEmail}\n${additionalLine}Image File Name: ${selectedImage.name}\nImage Size: ${(selectedImage.size / 1024).toFixed(
          1,
        )} KB\n\nConsent confirmed by parent/guardian.`,
      );

      window.location.href = `mailto:cs@lazydads.net?subject=${encodeURIComponent(
        `Showcase Submission: ${values.gameName}`,
      )}&body=${emailBody}`;

      toast({
        title: t("showcasePage.successMessage"),
      });
      form.reset();
      setSelectedImage(null);
      setImageError(null);
    } catch (error) {
      console.error(error);
      toast({
        title: t("showcasePage.errorMessage"),
        variant: "destructive",
      });
    }
  };

  const spamPrompt = t("showcasePage.form.spamLabel")
    .replace("{a}", String(spamNumbers.a))
    .replace("{b}", String(spamNumbers.b));

  const typeOptions = useMemo(() => {
    const unique = new Set<string>();
    baseEntries.forEach((entry) => unique.add(entry.gameType));
    return ["ALL", ...Array.from(unique)];
  }, [baseEntries]);

  const filteredEntries = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return baseEntries.filter((entry) => {
      const matchesType = typeFilter === "ALL" || entry.gameType === typeFilter;
      const matchesSearch =
        term.length === 0 ||
        [entry.gameName, entry.description, entry.displayName]
          .join(" ")
          .toLowerCase()
          .includes(term);
      return matchesType && matchesSearch;
    });
  }, [baseEntries, searchTerm, typeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-4xl text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {t("showcasePage.title")}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              {t("showcasePage.intro")}
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  {t("showcasePage.galleryTitle")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                  <Input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder={t("showcasePage.filters.searchPlaceholder")}
                    className="h-12"
                  />
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder={t("showcasePage.filters.typeLabel")} />
                    </SelectTrigger>
                    <SelectContent>
                      {typeOptions.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type === "ALL" ? t("showcasePage.filters.allTypes") : type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredEntries.map((entry) => (
                    <Card key={entry.id} className="flex flex-col h-full">
                      <CardHeader>
                        <img
                          src={entry.image}
                          alt={entry.altText[language as Language] ?? entry.altText.en}
                          className="w-full h-48 object-cover rounded-lg"
                          loading="lazy"
                        />
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <CardTitle className="text-xl">{entry.gameName}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {entry.displayName} • {entry.gameType}
                        </CardDescription>
                        <p className="text-sm text-foreground leading-relaxed">
                          {entry.description}
                        </p>
                      </CardContent>
                      {entry.remixUrl && (
                        <CardFooter>
                          <Button
                            asChild
                            className="w-full bg-amber-100 text-amber-900 hover:bg-amber-100/80 border border-amber-200"
                          >
                            <a
                              href={entry.remixUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t("showcasePage.startLabel")}
                            </a>
                          </Button>
                        </CardFooter>
                      )}
                    </Card>
                  ))}
                  {filteredEntries.length === 0 && (
                    <div className="col-span-full rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                      {t("showcasePage.filters.noResults")}
                    </div>
                  )}
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="guidelines">
                  <AccordionTrigger className="text-lg font-semibold">
                    {t("showcasePage.guidelinesTitle")}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {t<string[]>("showcasePage.guidelines").map((rule) => (
                        <li key={rule}>{rule}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("showcasePage.submissionTitle")}</CardTitle>
                  <CardDescription>{t("showcasePage.disclaimer")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="gameName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("showcasePage.form.gameName")}</FormLabel>
                            <FormControl>
                              <Input {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("showcasePage.form.description")}</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                required
                                rows={4}
                                className="resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gameType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("showcasePage.form.gameType")}</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={t("showcasePage.form.gameTypePlaceholder")} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {gameTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormItem>
                        <FormLabel>{t("showcasePage.form.uploadLabel")}</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept="image/*"
                            required
                            onChange={(event) => {
                              const file = event.target.files?.[0];
                              setSelectedImage(file ?? null);
                              setImageError(null);
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          {selectedImage ? `Selected: ${selectedImage.name}` : "JPEG, PNG, or GIF"}
                        </FormDescription>
                        {imageError && <p className="text-sm text-red-500">{imageError}</p>}
                      </FormItem>

                      <FormField
                        control={form.control}
                        name="displayName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("showcasePage.form.displayName")}</FormLabel>
                            <FormControl>
                              <Input {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="remixLink"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("showcasePage.form.remixLink")}</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormDescription>Optional</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="parentEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("showcasePage.form.parentEmail")}</FormLabel>
                            <FormControl>
                              <Input type="email" required {...field} />
                            </FormControl>
                            <FormDescription>
                              {dictionary.common.contactEmail
                                ? `Admin contact: ${dictionary.common.contactEmail}`
                                : ""}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="additionalContact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("showcasePage.form.additionalContact")}</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormDescription>Optional</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <div className="flex items-start gap-3 rounded-lg border border-dashed border-primary/40 p-3">
                              <input
                                type="checkbox"
                                className="mt-1 h-5 w-5 rounded border border-border"
                                checked={field.value ?? false}
                                onChange={(event) => field.onChange(event.target.checked)}
                                required
                              />
                              <FormLabel className="text-sm font-medium leading-tight text-foreground">
                                {t("showcasePage.form.consentLabel")}
                              </FormLabel>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="spamAnswer"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{spamPrompt}</FormLabel>
                            <FormControl>
                              <Input {...field} inputMode="numeric" pattern="[0-9]*" required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        {t("showcasePage.form.submit")}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Showcase;

