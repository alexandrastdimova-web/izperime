const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">
              izperi<span className="text-primary">.me</span>
            </h3>
            <p className="text-sm opacity-80">Професионално почистване от 2023</p>
          </div>
          
          <div className="text-center text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} izperi.me.bg - Всички права запазени</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
