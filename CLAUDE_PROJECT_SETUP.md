# 🎯 FinansKurs & EconModels Project Setup

## Quick Start Prompt for Claude Code

```
I'm working on FinansKurs (finanskurset.no) and EconModels (econmodels.online). 

Key project info:
- FinansKurs: React/TypeScript course platform with Supabase backend at /Users/atleguttormsen/Dropbox/Mac/Documents/FinansKurs
- EconModels: Interactive economic models at /Users/atleguttormsen/Dropbox/Mac/Documents/econmodels-online
- Both use Vite, shadcn/ui, React Router
- FinansKurs has 10 modules with sub-modules (X.Y numbering system)
- Database: Supabase with ContentRenderer pattern for dynamic content
- EconModelsLink component enables integration between platforms

Current architecture:
- ContentRenderer.tsx handles [ECONMODELS:model:variant] syntax
- SubModuleContent.tsx shows clean headers (no badges/prefixes)
- Supabase migrations in /supabase/migrations/
- Components in /src/components/course/

Ready to work!
```

## 🏗️ Project Architecture

### **FinansKurs Structure:**
```
/Users/atleguttormsen/Dropbox/Mac/Documents/FinansKurs/
├── src/
│   ├── components/course/
│   │   ├── ContentRenderer.tsx          # Dynamic content with [ECONMODELS:] support
│   │   ├── SubModuleContent.tsx         # Clean sub-module headers
│   │   ├── EconModelsLink.tsx          # External interactive tools integration
│   │   └── *Solution.tsx               # Modal solution components
│   ├── pages/
│   │   └── Index.tsx                    # Homepage (clean, no dev buttons)
│   └── ...
├── supabase/migrations/                 # Database schema and content
└── .env                                # Supabase credentials
```

### **EconModels Structure:**
```
/Users/atleguttormsen/Dropbox/Mac/Documents/econmodels-online/
├── src/
│   ├── App.tsx                         # React Router with /model/:id routes
│   ├── pages/ModelPage.tsx             # Individual model pages
│   └── components/                     # Interactive model components
├── vercel.json                         # SPA routing fix (catch-all to index.html)
└── vite.config.ts                     # History API fallback for dev
```

## 🔧 Key Technologies & Patterns

### **Frontend Stack:**
- **React 18** + **TypeScript** + **Vite**
- **shadcn/ui** components (Button, Dialog, Card, etc.)
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** icons

### **Backend & Data:**
- **Supabase** PostgreSQL database
- **Content-driven architecture** with JSON sections
- **Dynamic component injection** via ContentRenderer
- **Migration-based content updates**

### **Integration Patterns:**
- `[ECONMODELS:model:variant]` syntax for external tools
- Modal solution popups with `*Solution.tsx` components
- Consistent X.Y numbering for sub-modules
- Clean UI without redundant header elements

## 🎯 Common Tasks & Workflows

### **Adding New Content:**
1. Create migration file in `supabase/migrations/`
2. Update/add sub-module with proper X.Y numbering
3. Use ContentRenderer patterns for interactive elements

### **Solution Popups:**
1. Create `*Solution.tsx` component with Dialog
2. Add detection in ContentRenderer.tsx
3. Use specific Norwegian content with step-by-step solutions

### **EconModels Integration:**
1. Add new model to `modelConfigs` in EconModelsLink.tsx
2. Use `[ECONMODELS:model-name:variant]` in course content
3. Variants: `default`, `compact`, `featured`

### **Database Updates:**
- Use Node.js scripts with Supabase client for bulk updates
- Service role key for admin operations
- Always backup before major changes

## 🗄️ Database Schema

### **Key Tables:**
- `courses` → `modules` → `sub_modules`
- `sub_modules.content.sections[]` array with dynamic content
- Consistent `order_index` for sorting
- `title` includes X.Y prefixes for navigation

### **Content Structure:**
```json
{
  "sections": [
    {
      "title": "Section Title",
      "type": "content|insight|exercise",
      "content": "Markdown with [ECONMODELS:] support"
    }
  ]
}
```

## 🔐 Environment & Credentials

### **FinansKurs (.env):**
- `VITE_SUPABASE_URL`: Public Supabase URL
- `VITE_SUPABASE_ANON_KEY`: Public anon key
- `SUPABASE_SERVICE_ROLE_KEY`: Admin operations (keep secret!)

### **Deployment:**
- **FinansKurs:** GitHub → Vercel → finanskurset.no
- **EconModels:** GitHub → Vercel → econmodels.online
- Auto-deploy on main branch push

## 🚀 Development Workflow

### **Starting Development:**
1. `cd /Users/atleguttormsen/Dropbox/Mac/Documents/FinansKurs`
2. `npm run dev` (usually on port 5174)
3. Background processes may be running - check with BashOutput

### **Making Changes:**
1. Use TodoWrite for task tracking
2. Read existing files to understand patterns
3. Follow established conventions (no comments unless asked)
4. Keep responses concise and direct
5. Test changes before committing

### **Git Workflow:**
1. `git add .`
2. Descriptive commit with Claude Code signature
3. `git push` triggers auto-deployment
4. Both sites update automatically

## 🎓 Course Content Guidelines

### **Numbering System:**
- Modules: 1-10 (Introduksjon til finans → ESG og "grønn" finans)
- Sub-modules: X.Y format (e.g., 4.8 Durasjon og følsomhet)
- Always include numbers in titles for consistency

### **UI Principles:**
- Clean, minimal headers (no redundant badges)
- Norwegian language throughout
- Professional academic styling
- Mobile-responsive design
- Consistent spacing and typography

### **Interactive Elements:**
- Modal dialogs for solutions
- Interactive calculators via EconModels
- Step-by-step explanations in Norwegian
- Color-coded components (green=balance, blue=cashflow, purple=ratios)

## 💡 Quick Reference

### **Key Files to Remember:**
- `ContentRenderer.tsx` - Dynamic content parsing
- `SubModuleContent.tsx` - Clean UI headers
- `EconModelsLink.tsx` - External tool integration
- `Index.tsx` - Homepage (keep clean)

### **Common Patterns:**
- Modal solutions with `useState` + Dialog
- Supabase client scripts for bulk operations
- Migration files for database updates
- `[ECONMODELS:]` syntax for external tools

### **Important Notes:**
- Always use absolute paths in file operations
- Keep dev buttons/debug elements out of production
- Use proper Norwegian financial terminology
- Follow established component patterns
- Maintain consistent styling across all components

---

**Ready to continue development! Just mention what you want to work on and I'll understand the context immediately.** 🚀