import React from 'react';
import { Rocket, ArrowRight, Workflow, Bot } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { NavLink } from '../navigation/NavLink';

function Navigation() {
  return (
    <nav className="relative z-10 w-full py-4 lg:py-6">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Rocket className="text-black transition-colors duration-200" size={24} />
            <span className="font-orbitron text-base lg:text-lg font-medium tracking-wider text-black hover:text-gray-700 transition-colors duration-200">
              AutoB2B
            </span>
          </div>

          <div className="hidden md:flex justify-center space-x-8 lg:space-x-12 flex-1 mx-8 lg:mx-12">
            <NavLink href="#">Solutions</NavLink>
            <NavLink href="#">Case Studies</NavLink>
            <NavLink href="#">Resources</NavLink>
            <NavLink href="#">Pricing</NavLink>
          </div>

          <Button variant="secondary">Contact Us</Button>
        </div>
      </Container>
    </nav>
  );
}

const automationTools = [
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    color: "#0A66C2"
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    color: "#00A1E0"
  },
  {
    name: "HubSpot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png",
    color: "#FF7A59"
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
    color: "#4A154B"
  },
  {
    name: "Zapier",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
    color: "#FF4A00"
  },
  {
    name: "Microsoft Teams",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png",
    color: "#6264A7"
  }
];

function EnergyFlow() {
  const generateZigzagPath = (startX: number, startY: number, endX: number, endY: number, amplitude: number = 20, segments: number = 4) => {
    const dx = endX - startX;
    const dy = endY - startY;
    const angle = Math.atan2(dy, dx);
    
    let path = `M ${startX} ${startY}`;
    
    for (let i = 1; i <= segments; i++) {
      const t = i / segments;
      const x = startX + dx * t;
      const y = startY + dy * t;
      const perpX = -Math.sin(angle) * amplitude * (i % 2 ? 1 : -1);
      const perpY = Math.cos(angle) * amplitude * (i % 2 ? 1 : -1);
      
      if (i < segments) {
        path += ` L ${x + perpX} ${y + perpY}`;
      } else {
        path += ` L ${endX} ${endY}`;
      }
    }
    
    return path;
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-[400px] h-[400px]">
        <svg className="w-full h-full" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
          <defs>
            {automationTools.map((tool, index) => (
              <linearGradient key={`gradient-${index}`} id={`flowGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={tool.color} stopOpacity="0.2">
                  <animate
                    attributeName="offset"
                    values="0;1;0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor={tool.color} stopOpacity="0.8">
                  <animate
                    attributeName="offset"
                    values="0.5;1.5;0.5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor={tool.color} stopOpacity="0.2">
                  <animate
                    attributeName="offset"
                    values="1;2;1"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            ))}

            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {automationTools.map((tool, index) => {
            const angle = (index * 360) / automationTools.length;
            const radius = 180;
            const centerX = 300;
            const centerY = 300;
            const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
            const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
            
            const path = generateZigzagPath(centerX, centerY, x, y);
            
            return (
              <g key={index}>
                <path
                  d={path}
                  stroke={tool.color}
                  strokeWidth="1.5"
                  fill="none"
                  className="transition-all duration-300"
                  style={{ opacity: 0.3 }}
                />
                <path
                  d={path}
                  stroke={`url(#flowGradient-${index})`}
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="4 6"
                  filter="url(#glow)"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-20"
                    dur={`${2 + index * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </path>
                <circle
                  r="4"
                  fill={tool.color}
                  opacity="0.8"
                >
                  <animateMotion
                    dur={`${3 + index * 0.5}s`}
                    repeatCount="indefinite"
                    path={path}
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {automationTools.map((tool, index) => {
          const angle = (index * 360) / automationTools.length;
          const radius = 180;
          const x = 300 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 300 + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x * (400/600)}px`, top: `${y * (400/600)}px` }}
            >
              <div className="w-10 h-10 bg-white rounded-xl shadow-xl p-2 flex items-center justify-center">
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          );
        })}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 bg-black rounded-full shadow-2xl flex items-center justify-center">
            <Bot size={16} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">      
      <Navigation />

      <main className="relative pt-8 lg:pt-12">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 min-h-[calc(100vh-5rem)] items-center">
            <div className="relative z-10 space-y-6 lg:space-y-8 lg:col-span-8">
              <div className="inline-flex items-center border border-black/10 px-4 py-1.5">
                <Workflow size={16} className="mr-2 text-black" />
                <span className="text-sm font-orbitron text-black">AI Automation Agency</span>
              </div>

              <h1 className="font-orbitron text-5xl lg:text-6xl font-bold tracking-tight leading-none">
                <span className="block">Connect &</span>
                <span className="metallic-text block mt-2">Automate</span>
                <span className="block mt-2">Everything</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed font-inter">
                Seamlessly integrate and automate your tools with AI-powered workflows that drive measurable business results. Scale your lead generation without expanding your team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" className="group font-orbitron">
                  Start Building
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="secondary" className="font-orbitron">View Integrations</Button>
              </div>

              <div className="pt-6 lg:pt-8">
                <p className="text-sm text-gray-600 mb-3 font-inter">Popular Automations:</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Lead Generation Pipeline",
                    "Sales Workflow Automation",
                    "Marketing Campaign Integration",
                    "Team Collaboration Hub"
                  ].map((automation, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                      <span className="text-sm font-inter">{automation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block lg:col-span-4">
              <div className="h-full flex items-center justify-center">
                <EnergyFlow />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default Hero;