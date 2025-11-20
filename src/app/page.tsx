"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, BarChart, BookOpen, Certificate, Crown, Dumbbell, Handshake, Heart, HelpCircle, Instagram, MessageSquare, ShoppingCart, Smartphone, TrendingUp, Trophy, Users, Youtube, Twitter, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="radialGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Products", id: "products" },
            { name: "Team", id: "team" }
          ]}
          brandName="Johnny Sins"
          button={{ text: "Contact", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Body & Mind"
          description="Professional fitness coaching, premium supplements, and proven workout programs to help you achieve your ultimate physique and mental strength."
          tag="Fitness Professional"
          tagIcon={Dumbbell}
          buttons={[
            { text: "Start Training", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681989768-rd9njsir.jpg"
          imageAlt="Johnny Sins professional fitness trainer"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Johnny"
          description="With years of experience in fitness, nutrition, and personal development, I've helped thousands transform their lives through proven methods and unwavering dedication."
          tag="Professional Background"
          tagIcon={Award}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Certified Trainer",
              description: "Multiple certifications in personal training and nutrition coaching",
              icon: Certificate
            },
            {
              title: "Proven Results",
              description: "Helped over 10,000 clients achieve their fitness goals",
              icon: TrendingUp
            },
            {
              title: "Holistic Approach",
              description: "Focus on physical, mental, and nutritional wellness",
              icon: Heart
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681989768-rd9njsir.jpg"
          imageAlt="Johnny Sins fitness professional"
          imagePosition="left"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Mobile Training Experience"
          description="Access professional workouts, nutrition tracking, and progress monitoring right from your phone"
          tag="App Features"
          tagIcon={Smartphone}
          textboxLayout="default"
          showStepNumbers={true}
          features={[
            {
              id: 1,
              title: "Personalized Workouts",
              description: "Custom training programs tailored to your fitness level and goals with real-time form corrections",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681990423-xfb00mja.jpg",
                imageAlt: "Workout app dashboard"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681990965-7blgeste.jpg",
                imageAlt: "Exercise tracking screen"
              }
            },
            {
              id: 2,
              title: "Nutrition Tracking",
              description: "Monitor your daily nutrition intake and get personalized meal recommendations for optimal results",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681990423-xfb00mja.jpg",
                imageAlt: "Nutrition tracking interface"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681990965-7blgeste.jpg",
                imageAlt: "Meal planning screen"
              }
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Premium Products"
          description="Professional-grade supplements, equipment, and training programs designed for serious results"
          tag="Shop Now"
          tagIcon={ShoppingCart}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Johnny Sins",
              name: "Premium Protein Powder",
              price: "$49.99",
              rating: 5,
              reviewCount: "2.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681991790-8gu39746.jpg",
              imageAlt: "Premium protein powder"
            },
            {
              id: "2",
              brand: "Johnny Sins",
              name: "Professional Dumbbell Set",
              price: "$199.99",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681992438-viunsrag.jpg",
              imageAlt: "Professional dumbbell set"
            },
            {
              id: "3",
              brand: "Johnny Sins",
              name: "Complete Training Guide",
              price: "$29.99",
              rating: 5,
              reviewCount: "5.1k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681993078-cf30jpf3.jpg",
              imageAlt: "Complete training guide book"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Proven Impact"
          description="Real numbers that showcase the effectiveness of our training programs and community"
          tag="Results"
          tagIcon={BarChart}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Clients Trained",
              value: "10,000+"
            },
            {
              id: "2",
              icon: Trophy,
              title: "Success Rate",
              value: "98%"
            },
            {
              id: "3",
              icon: Star,
              title: "Average Rating",
              value: "4.9"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Johnny"
          description="The professional behind your transformation journey"
          tag="Leadership"
          tagIcon={Crown}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Johnny Sins",
              role: "Fitness Professional",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681989768-rd9njsir.jpg",
              imageAlt: "Johnny Sins professional portrait"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Client Success Stories"
          description="Real transformations from people who trusted the process"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Fitness Enthusiast",
              company: "Marketing Director",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681993733-bz2l15ix.jpg",
              imageAlt: "Sarah Johnson client testimonial"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Personal Trainer",
              company: "Former Client",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681994549-7annqn09.jpg",
              imageAlt: "Mike Chen client testimonial"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Nutritionist",
              company: "Health Coach",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681995343-dr3j6w2u.jpg",
              imageAlt: "Emily Rodriguez client testimonial"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Owner",
              company: "Entrepreneur",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681996066-r8an7smm.jpg",
              imageAlt: "David Kim client testimonial"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="Partnered with the world's top fitness and wellness companies"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681997172-s9m1vaw6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681997875-3w5oaqsh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681998517-awnohnjx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681999551-qe0y52uv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763682000341-xejdnswd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763682000882-4ffa02xy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763682001375-12keitp4.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about training programs and services"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes your training programs different?",
              content: "Our programs combine personalized workouts, nutrition guidance, and mental coaching for complete transformation. Every plan is tailored to your specific goals and fitness level."
            },
            {
              id: "2",
              title: "How quickly will I see results?",
              content: "Most clients see noticeable changes within 2-3 weeks of consistent training. Significant transformations typically occur within 8-12 weeks depending on your starting point and commitment level."
            },
            {
              id: "3",
              title: "Do you offer online coaching?",
              content: "Yes! We offer comprehensive online coaching including virtual training sessions, meal planning, progress tracking, and 24/7 support through our mobile app."
            },
            {
              id: "4",
              title: "What if I'm a complete beginner?",
              content: "Perfect! We specialize in helping beginners build a strong foundation. All programs start with proper form training and gradually progress based on your improvement and comfort level."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Insights"
          description="Professional tips, workout guides, and nutrition advice to accelerate your progress"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Workout",
              title: "5 Compound Exercises for Maximum Gains",
              excerpt: "Discover the most effective exercises that work multiple muscle groups simultaneously for optimal results",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763682001907-wz4fpl6o.jpg",
              imageAlt: "Compound exercises guide",
              authorName: "Johnny Sins",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681989768-rd9njsir.jpg",
              date: "Dec 15, 2024"
            },
            {
              id: "2",
              category: "Nutrition",
              title: "The Complete Guide to Meal Timing",
              excerpt: "Learn when and what to eat to maximize your workout performance and recovery",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763682002712-t05v0dgg.jpg",
              imageAlt: "Nutrition timing guide",
              authorName: "Johnny Sins",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681989768-rd9njsir.jpg",
              date: "Dec 10, 2024"
            },
            {
              id: "3",
              category: "Mindset",
              title: "Building Mental Strength for Physical Success",
              excerpt: "The psychological strategies that separate successful transformations from failed attempts",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763682003840-onpx6ap6.jpg",
              imageAlt: "Mental strength guide",
              authorName: "Johnny Sins",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763681989768-rd9njsir.jpg",
              date: "Dec 5, 2024"
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Johnny Sins"
          copyrightText="© 2024 Johnny Sins Fitness. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "Personal Training", href: "training" },
                { label: "Nutrition Coaching", href: "nutrition" },
                { label: "Online Programs", href: "programs" }
              ]
            },
            {
              title: "Products",
              items: [
                { label: "Supplements", href: "supplements" },
                { label: "Equipment", href: "equipment" },
                { label: "Training Guides", href: "guides" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Community", href: "community" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Youtube, href: "https://youtube.com", ariaLabel: "YouTube" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}