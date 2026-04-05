export interface Publication {
  year?: string;
  conference?: string;
  title: string;
  authors?: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    title: "How to write better Python classes using Magic Methods",
    paperUrl: "https://dev.to/bikramjeetsingh/how-to-write-better-python-classes-using-magic-methods-4166",
    tldr: "Using magic methods to create more Pythonic and readable code.",
  },
  {
    title: "Soft Deletes in Django",
    paperUrl: "https://dev.to/bikramjeetsingh/soft-deletes-in-django-a9j",
    codeUrl: "https://github.com/BikramjeetSingh/Django-Soft-Delete-Tutorial-Example",
    tldr: "How delete data from your Django application without actually deleting it.",
  },
  {
    title: "A Comprehensive Guide to Django Middleware",
    paperUrl: "https://dev.to/bikramjeetsingh/a-comprehensive-guide-to-django-middleware-2fee",
    codeUrl: "https://github.com/BikramjeetSingh/Django-Middleware-Tutorial-Example",
    tldr: "How to implement powerful Django middleware functionality.",
  },
];
