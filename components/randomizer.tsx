"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, RefreshCw, Shuffle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { motion, AnimatePresence } from "framer-motion"

interface HistoryItem {
  option: string
  timestamp: Date
}

export default function Randomizer() {
  const [options, setOptions] = useState<string>("")
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [isRandomizing, setIsRandomizing] = useState(false)
  const [activeTab, setActiveTab] = useState("input")

  const handleRandomize = () => {
    const optionsList = options
      .split("\n")
      .map((option) => option.trim())
      .filter((option) => option.length > 0)

    if (optionsList.length === 0) {
      return
    }

    setIsRandomizing(true)

    // Simulate a randomization effect
    let counter = 0
    const totalIterations = 10
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * optionsList.length)
      setSelectedOption(optionsList[randomIndex])

      counter++
      if (counter >= totalIterations) {
        clearInterval(interval)
        setIsRandomizing(false)

        // Add to history only when animation completes
        const finalOption = optionsList[Math.floor(Math.random() * optionsList.length)]
        setSelectedOption(finalOption)
        setHistory((prev) => [{ option: finalOption, timestamp: new Date() }, ...prev])
        setActiveTab("result")
      }
    }, 100)
  }

  const handleReset = () => {
    setOptions("")
    setSelectedOption(null)
    setHistory([])
    setActiveTab("input")
  }

  const handleClearHistory = () => {
    setHistory([])
  }

  const optionsList = options
    .split("\n")
    .map((option) => option.trim())
    .filter((option) => option.length > 0)

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="input">Input Options</TabsTrigger>
          <TabsTrigger value="result">Result</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="input" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Enter Your Options</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter one option per line..."
                className="min-h-[200px]"
                value={options}
                onChange={(e) => setOptions(e.target.value)}
              />

              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  {optionsList.length} option{optionsList.length !== 1 ? "s" : ""} entered
                </p>
              </div>

              {optionsList.length < 2 && (
                <Alert variant="destructive" className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>Please enter at least two options to randomize.</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="result" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Random Selection</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center min-h-[200px]">
              <AnimatePresence mode="wait">
                {selectedOption ? (
                  <motion.div
                    key={selectedOption}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center"
                  >
                    <h2 className="text-2xl font-bold mb-2">Your Result:</h2>
                    <div className="text-3xl font-bold p-6 rounded-lg bg-primary/10 max-w-full break-words">
                      {selectedOption}
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center text-muted-foreground">
                    <p>Click "Randomize" to select a random option</p>
                  </div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Selection History</CardTitle>
              {history.length > 0 && (
                <Button variant="outline" size="sm" onClick={handleClearHistory}>
                  Clear History
                </Button>
              )}
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                {history.length > 0 ? (
                  <div className="space-y-3">
                    {history.map((item, index) => (
                      <div key={index} className="p-3 rounded-md bg-muted flex flex-col">
                        <span className="font-medium break-words">{item.option}</span>
                        <span className="text-xs text-muted-foreground mt-1">{item.timestamp.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No history yet</p>
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center">
        <Button
          onClick={handleRandomize}
          disabled={optionsList.length < 2 || isRandomizing}
          className="flex-1 h-16 text-lg sm:text-base py-8 sm:py-0"
          size="lg"
        >
          {isRandomizing ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Randomizing...
            </>
          ) : (
            <>
              <Shuffle className="mr-2 h-4 w-4" />
              Randomize
            </>
          )}
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          className="flex-1 h-16 text-lg sm:text-base py-8 sm:py-0"
          size="lg"
        >
          Reset All
        </Button>
      </div>
    </div>
  )
}
