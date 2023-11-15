export interface AQIcalcData {
    [key: string]: {
      component: string;
      value: number;
    };
  }
  
export interface StationData {
    id: number;
    zone: string;
    municipality: string;
    area: string;
    station: string;
    eoi: string;
    type: string;
    component: string;
    fromTime: string;
    toTime: string;
    value: number;
    unit: string;
    latitude: number;
    longitude: number;
    timestep: number;
    index: number;
    color: string;
    isValid: boolean;
    isVisible: boolean;
  }

  interface HistoryData {
    id: number;
    zone: string;
    municipality: string;
    area: string;
    station: string;
    type: string;
    eoi: string;
    component: string;
    latitude: number;
    longitude: number;
    unit: string;
    timestep: number;
    isVisible: boolean;
    values: {
      dateTime: string;
      value: number;
      count: number;
      coverage: number;
    }[];
  }

  interface HistoryDataValue {
    dateTime: string;
    value: number;
    count: number;
    coverage: number;
  }

  type ChartData = [string, number][];

  export interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outlined' | 'text';
    selected?: boolean;
  }

  export interface MultiSelectButtonProps {
    options: string[];
    onChange: (selectedOption: string) => void;
  }
  
  export interface SearchProps {
    data: string[];
    onLocationSelected: (location: string) => void;
  }

  export interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
    color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | string;
    className?: string;
    children: React.ReactNode;
  }

  export interface ImageProps {
    src: string;
    classes?: string;
    alt?: string;
  }
  