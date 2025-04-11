
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProtectedRouteProps {
  element: React.ReactElement;
  password: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, password }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [inputPassword, setInputPassword] = useState("");
  
  // Check if already authenticated in session storage
  useEffect(() => {
    const authenticated = sessionStorage.getItem("investorAuthenticated") === "true";
    setIsAuthenticated(authenticated);
    setIsDialogOpen(!authenticated);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputPassword === password) {
      sessionStorage.setItem("investorAuthenticated", "true");
      setIsAuthenticated(true);
      setIsDialogOpen(false);
      toast.success("Access granted");
    } else {
      toast.error("Incorrect password");
      setInputPassword("");
    }
  };
  
  if (isAuthenticated) {
    return element;
  }
  
  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Investor Access</DialogTitle>
            <DialogDescription>
              This page is password protected. Please enter the password to continue.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <Input
              id="password"
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full"
              autoFocus
            />
            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Navigate to="/" replace />
    </>
  );
};

export default ProtectedRoute;
