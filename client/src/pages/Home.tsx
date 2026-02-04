import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Search, Link2, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * AI'M Assistant Landing Page
 * Design Philosophy: Modern Tech-Forward with Organic Curves
 * - Blue (#1E88E5) for trust and intelligence
 * - Orange (#FFB74D) for warmth and innovation
 * - Poppins (display) + Inter (body) typography
 * - Organic wave dividers and floating card layouts
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('/images/hero-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/80 z-0" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Интеллектуальный помощник для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AI'M Assistant — это решение для локального развертывания или использования по модели SaaS, которое интегрируется с существующими информационными системами компании и обеспечивает быстрый доступ к нужной информации.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white gap-2"
              >
                Начать бесплатно <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider 1 */}
      <svg
        className="w-full h-24 text-white"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      {/* Problem Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Боль: <span className="text-primary">Информационный хаос</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Компании накапливают огромные объемы инструкций, регламентов и баз знаний — но эффективно использовать эту информацию становится всё сложнее.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "73%",
                label: "сотрудников",
                desc: "тратят более 2 часов в день на поиск нужной информации.",
              },
              {
                stat: "85%",
                label: "компаний",
                desc: "отмечают, что неэффективный поиск снижает производительность.",
              },
              {
                stat: "30%",
                label: "времени",
                desc: "уходит на поиск документов и данных.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-8 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {item.stat}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {item.label}
                </div>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider 2 */}
      <svg
        className="w-full h-24 text-blue-50 transform rotate-180"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Решение: <span className="text-primary">AI'M Assistant</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Это решение для локального развертывания или использования по модели SaaS, которое интегрируется с существующими информационными системами компании и обеспечивает быстрый доступ к нужной информации.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    icon: Search,
                    title: "Умный поиск",
                    desc: "Мгновенный поиск по всей документации с пониманием контекста запроса",
                  },
                  {
                    icon: Link2,
                    title: "Точные ссылки",
                    desc: "Предоставление прямых ссылок на источники информации",
                  },
                  {
                    icon: Shield,
                    title: "Интеграция",
                    desc: "Легкая интеграция с существующими системами и мессенджерами",
                  },
                  {
                    icon: Zap,
                    title: "Безопасность",
                    desc: "Локальное развертывание для защиты конфиденциальных данных",
                  },
                ].map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/solution.webp"
                alt="AI'M Assistant Solution"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider 3 */}
      <svg
        className="w-full h-24 text-blue-50"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      {/* Architecture Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
            Компонентная модель <span className="text-primary">AI'M Assistant</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Система построена на основе современных технологий обработки данных и искусственного интеллекта для обеспечения максимальной производительности и точности.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 overflow-x-auto">
            <img
              src="/images/architecture.webp"
              alt="AI'M Assistant Architecture"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы трансформировать работу с данными?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Начните использовать AI'M Assistant уже сегодня и увеличьте производительность вашей команды.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Начать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Запросить демо
            </Button>
          </div>
        </div>
      </section>
      {/* Footer removed as requested */}
    </div>
  );
}
