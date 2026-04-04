"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Github, Rocket, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CohortRegistrationPage() {
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  githubHandle: "",
  department: "",
  level: "",
  experience: "",
  registeringFor: "", // Add this line
  motivation: "",
  commitment: false,
  terms: false,
})

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!formData.level || !formData.experience || !formData.registeringFor) {
      setError("Please fill out all selection fields.");
      return;
    }

    if (!formData.commitment || !formData.terms) {
      setError("You must agree to the commitment and terms.");
      return;
    }

    setIsSubmitting(true);
  

  const payload = {
    first_name: formData.firstName, // Map to snake_case
    last_name: formData.lastName,
    email: formData.email,
    github_handle: formData.githubHandle,
    department: formData.department,
    level: formData.level,
    experience: formData.experience,
    registering_for: formData.registeringFor,
    motivation: formData.motivation,
    commitment: formData.commitment,
    terms: formData.terms,
    cohort_name: "DEV-COHORT-I"
  };

  try {
    const response = await fetch("https://bcl-website.onrender.com/cohorts/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Submission failed");
    }
    setIsSubmitted(true);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsSubmitting(false);
  }
};
  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center p-4">
          <Card className="max-w-md w-full text-center shadow-2xl">
            <CardContent className="p-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="font-serif text-3xl font-bold mb-4">Application Received!</h1>
              <p className="text-gray-600 mb-8">
                Your application for <strong>DEV-COHORT I</strong> is being reviewed. Keep an eye on your email for the next steps and interview schedule.
              </p>
              <Button asChild className="w-full">
                <Link href="/cohorts/development/devcohort1">Back to Cohort Details</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-12 bg-linear-to-b from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/cohorts/development/devcohort1" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cohort Details
          </Link>
          <div className="text-center">
            <Badge className="mb-4">Cohort I</Badge>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Apply for Developer Cohort</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to master Web3? Fill out the details below. Applications are reviewed on a rolling basis.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="border-b bg-gray-50/50">
              <div className="flex items-center gap-3">
                <Rocket className="text-primary h-6 w-6" />
                <CardTitle>Program Application</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">{error}</div>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input required placeholder="Jeremiah" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input required placeholder="Damilare" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input required type="email" placeholder="jerydam@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github" className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> GitHub Link *
                  </Label>
                  <Input required placeholder="https://github.com/jerydam" value={formData.githubHandle} onChange={(e) => setFormData({...formData, githubHandle: e.target.value})} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Input required placeholder="Computer Science" value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="level">Current Level *</Label>
                    <Select required onValueChange={(v) => setFormData({...formData, level: v})}>
                      <SelectTrigger><SelectValue placeholder="Select Level" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100">100 Level</SelectItem>
                        <SelectItem value="200">200 Level</SelectItem>
                        <SelectItem value="300">300 Level</SelectItem>
                        <SelectItem value="400">400 Level</SelectItem>
                        <SelectItem value="500">500 Level</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Experience Level *</Label>
                    <Select required onValueChange={(v) => setFormData({...formData, experience: v})}>
                      <SelectTrigger><SelectValue placeholder="Select background" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Total Beginner</SelectItem>
                        <SelectItem value="web2">Web2 Background</SelectItem>
                        <SelectItem value="web3-junior">Junior Web3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Registering For *</Label>
                    <Select required onValueChange={(v) => setFormData({...formData, registeringFor: v})}>
                      <SelectTrigger><SelectValue placeholder="Select Track" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web2">Web2 Track</SelectItem>
                        <SelectItem value="web3">Web3 Track</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>  

                <div className="space-y-2">
                  <Label htmlFor="motivation">Motivation *</Label>
                  <Textarea 
                    required 
                    placeholder="Tell us why you want to join..."
                    className="min-h-[120px]"
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                  />
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="commitment" required checked={formData.commitment} onCheckedChange={(v) => setFormData({...formData, commitment: !!v})} />
                    <Label htmlFor="commitment" className="text-sm">I can commit 10+ hours/week *</Label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox id="terms" required checked={formData.terms} onCheckedChange={(v) => setFormData({...formData, terms: !!v})} />
                    <Label htmlFor="terms" className="text-sm">I agree to the code of conduct *</Label>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}