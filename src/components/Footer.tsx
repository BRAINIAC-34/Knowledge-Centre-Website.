const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">K</span>
          </div>
          <span className="font-heading font-bold text-lg">Knowledge Centre</span>
        </div>
        <p className="text-card/60 text-sm">
          © {new Date().getFullYear()} Knowledge Centre Online Learning Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
