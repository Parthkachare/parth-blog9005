import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Code, Play, RotateCcw, Sparkles } from "lucide-react";

const initialCode = `// Try editing this code!
function greet(name) {
  return \`Hello, \${name}! 👋\`;
}

console.log(greet("Developer"));

// Try some calculations
const add = (a, b) => a + b;
console.log("2 + 3 =", add(2, 3));

// Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);`;

export function CodePlayground() {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);

  const runCode = () => {
    const logs: string[] = [];
    const originalLog = console.log;

    console.log = (...args: unknown[]) => {
      logs.push(args.map((arg) => String(arg)).join(" "));
    };

    try {
      eval(code);
      setOutput(logs.length > 0 ? logs : ["Code executed successfully!"]);
    } catch (error) {
      setOutput([`Error: ${error instanceof Error ? error.message : String(error)}`]);
    } finally {
      console.log = originalLog;
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput([]);
  };

  return (
    <motion.div
      className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#ff9933] flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Code className="w-6 h-6 text-white" />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold">Code Playground</h3>
          <p className="text-sm text-muted-foreground">
            Try JavaScript right here!
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF7A00]" />
            Code Editor
          </label>
          <Button
            onClick={resetCode}
            variant="ghost"
            size="sm"
            className="text-xs"
          >
            <RotateCcw className="w-3 h-3 mr-1" />
            Reset
          </Button>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full bg-[#0C0C0C] text-[#F4F4F4] border-2 border-border rounded-xl p-4 font-mono text-sm resize-none focus:border-[#FF7A00] focus:outline-none transition-colors"
          rows={12}
          spellCheck={false}
        />
      </div>

      <Button
        onClick={runCode}
        className="w-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 mb-4"
      >
        <Play className="w-4 h-4 mr-2" />
        Run Code
      </Button>

      {output.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-[#0C0C0C] border-2 border-[#FF7A00]/30 rounded-xl p-4 overflow-auto"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-[#FF7A00]">Console Output</span>
          </div>
          <div className="font-mono text-sm text-[#F4F4F4] space-y-1">
            {output.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-2"
              >
                <span className="text-[#FF7A00] select-none">›</span>
                <span>{line}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
