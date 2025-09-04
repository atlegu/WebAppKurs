import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calculator, TrendingUp } from 'lucide-react';

interface EconModelsLinkProps {
  model: 'bond-pricing' | 'capm-sml' | 'portfolio-risk'; // Add more models as needed
  title?: string;
  description?: string;
  variant?: 'default' | 'compact' | 'featured';
}

const modelConfigs = {
  'bond-pricing': {
    title: '🔗 Interaktiv obligasjonsmodell',
    description: 'Utforsk obligasjonsprising, duration og convexity med vår interaktive kalkulator',
    url: 'https://www.econmodels.online/model/bond-pricing',
    icon: <Calculator className="h-4 w-4" />,
    color: 'from-blue-500 to-blue-600'
  },
  'capm-sml': {
    title: '🔗 CAPM og Security Market Line',
    description: 'Interaktiv modell for CAPM-beregninger og risiko-avkastning analyse',
    url: 'https://www.econmodels.online/model/capm-sml', 
    icon: <TrendingUp className="h-4 w-4" />,
    color: 'from-green-500 to-green-600'
  },
  'portfolio-risk': {
    title: '🔗 Porteføljerisiko-modell',
    description: 'Beregn risiko og avkastning for porteføljer med multiple aktiva',
    url: 'https://www.econmodels.online/model/portfolio-risk',
    icon: <TrendingUp className="h-4 w-4" />,
    color: 'from-purple-500 to-purple-600'
  }
};

export const EconModelsLink: React.FC<EconModelsLinkProps> = ({ 
  model, 
  title, 
  description, 
  variant = 'default' 
}) => {
  const config = modelConfigs[model];
  const displayTitle = title || config.title;
  const displayDescription = description || config.description;

  if (variant === 'compact') {
    return (
      <div className="my-4">
        <Button 
          asChild
          variant="outline"
          className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
        >
          <a 
            href={config.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            {config.icon}
            {displayTitle}
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`my-6 p-6 rounded-xl bg-gradient-to-r ${config.color} text-white`}>
        <div className="flex items-start gap-4">
          <div className="p-2 bg-white/20 rounded-lg">
            {config.icon}
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2">{displayTitle}</h4>
            <p className="text-white/90 mb-4 leading-relaxed">
              {displayDescription}
            </p>
            <Button 
              asChild
              variant="secondary"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              <a 
                href={config.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Åpne interaktiv modell
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="my-6 p-5 bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-200 rounded-lg">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
          {config.icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-blue-900 mb-2">{displayTitle}</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {displayDescription}
          </p>
          <Button 
            asChild
            className="bg-blue-600 hover:bg-blue-700"
          >
            <a 
              href={config.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Åpne modell i ny fane
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};