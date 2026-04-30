export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern React Applications with TypeScript",
    excerpt:
      "Learn how to leverage TypeScript's powerful type system to build scalable and maintainable React applications.",
    content: `TypeScript has become an essential tool for modern React development. In this comprehensive guide, we'll explore how to set up a React project with TypeScript and leverage its powerful features.

## Why TypeScript?

TypeScript adds static typing to JavaScript, helping you catch errors early and providing better IDE support. This is especially valuable in large React applications where prop types and component interfaces can become complex.

## Getting Started

First, create a new React app with TypeScript:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

## Component Props

Define your component props using interfaces:

\`\`\`typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return <button onClick={onClick}>{label}</button>;
};
\`\`\`

## Hooks with TypeScript

TypeScript works seamlessly with React Hooks:

\`\`\`typescript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
\`\`\`

## Conclusion

TypeScript significantly improves the React development experience by providing type safety, better autocomplete, and early error detection.`,
    image: "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzczNTI0OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "React",
    date: "Mar 12, 2026",
    readTime: "8 min read",
    author: "Parth Kachare",
    featured: true,
  },
  {
    id: "2",
    title: "The Future of Web Development in 2026",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of web development this year.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzUxMjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tutorials",
    date: "Mar 10, 2026",
    readTime: "6 min read",
    author: "Parth Kachare",
  },
  {
    id: "3",
    title: "Mastering Tailwind CSS: Advanced Techniques",
    excerpt:
      "Dive deep into Tailwind CSS and discover advanced patterns for building beautiful UIs.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzM0NDk1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "UI/UX",
    date: "Mar 8, 2026",
    readTime: "10 min read",
    author: "Parth Kachare",
  },
  {
    id: "4",
    title: "How AI is Transforming Developer Workflows",
    excerpt:
      "Discover how AI tools are revolutionizing the way developers write code and solve problems.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1702046988296-40db18f155ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwd29ya3NwYWNlJTIwbWVldGluZ3xlbnwxfHx8fDE3NzM1NjA2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "AI",
    date: "Mar 5, 2026",
    readTime: "7 min read",
    author: "Parth Kachare",
  },
  {
    id: "5",
    title: "Building Your First Startup: Lessons Learned",
    excerpt:
      "Key insights and lessons from launching and scaling a tech startup in 2026.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHR1dG9yaWFsJTIwbGFwdG9wfGVufDF8fHx8MTc3MzU2MDYwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Startups",
    date: "Mar 3, 2026",
    readTime: "12 min read",
    author: "Parth Kachare",
  },
  {
    id: "6",
    title: "React Server Components: A Complete Guide",
    excerpt:
      "Understanding React Server Components and how they improve performance and user experience.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGphdmFzY3JpcHQlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzM1NjA2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "React",
    date: "Mar 1, 2026",
    readTime: "9 min read",
    author: "Parth Kachare",
  },
  {
    id: "7",
    title: "Creating Beautiful User Interfaces with Design Systems",
    excerpt:
      "How to build and maintain a scalable design system for your organization.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1728281144091-b743062a9bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MzU0MzQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "UI/UX",
    date: "Feb 28, 2026",
    readTime: "11 min read",
    author: "Parth Kachare",
  },
  {
    id: "8",
    title: "Team Collaboration in Software Engineering",
    excerpt:
      "Best practices for remote team collaboration and agile development.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwdGVhbXxlbnwxfHx8fDE3NzM1MTUzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Startups",
    date: "Feb 26, 2026",
    readTime: "8 min read",
    author: "Parth Kachare",
  },
  {
    id: "9",
    title: "Next.js 15: What's New and Exciting",
    excerpt:
      "Exploring the latest features and improvements in Next.js 15.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXh0anMlMjB0eXBlc2NyaXB0JTIwY29kZXxlbnwxfHx8fDE3NzM1NjA4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tutorials",
    date: "Feb 24, 2026",
    readTime: "10 min read",
    author: "Parth Kachare",
  },
];