export interface TrackingSolution {
  slug: string;
  name: string;
  description: string;
  features: string[];
}

export const trackingSolutions: TrackingSolution[] = [
  {
    slug: "personal-vehicle-tracking",
    name: "Personal Vehicle Tracking",
    description:
      "Keep an eye on your personal car with real-time location, trip history and speed alerts.",
    features: ["Real-time location", "Trip history", "Speed alerts"],
  },
  {
    slug: "fleet-tracking",
    name: "Fleet Tracking",
    description:
      "Monitor and manage multiple company vehicles from one dashboard, built for growing businesses.",
    features: ["Multi-vehicle dashboard", "Driver behavior insights", "Route history"],
  },
  {
    slug: "motorbike-tracking",
    name: "Motorbike Tracking",
    description:
      "Compact GPS tracking built for boda bodas and personal motorbikes across Kenya.",
    features: ["Compact installation", "Real-time location", "Geofencing"],
  },
  {
    slug: "asset-tracking",
    name: "Asset Tracking",
    description:
      "Track high-value equipment and assets to protect them from loss or theft.",
    features: ["Asset location history", "Movement alerts", "Battery-friendly tracking"],
  },
  {
    slug: "commercial-vehicle-tracking",
    name: "Commercial Vehicle Tracking",
    description:
      "Purpose-built tracking for trucks, vans and commercial fleets with heavier duty cycles.",
    features: ["Fleet management", "Geofencing", "Reliable customer support"],
  },
];
