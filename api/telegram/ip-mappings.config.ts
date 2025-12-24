/**
 * IP address mappings for personalized notifications
 * When someone accesses with an IP from the iplist, the notification will use the name
 */

/**
 * IP mapping configuration
 */
export interface IpMapping {
  /**
   * Name/identifier for the person or organization
   */
  name: string;
  /**
   * List of IP addresses associated with this name
   */
  iplist: string[];
}

/**
 * IP address mappings
 * Add IP addresses here to personalize notifications
 */
export const ipMappings: IpMapping[] = [
  {
    name: 'Pavel Novikov',
    iplist: ['95.161.61.95', '188.243.45.163'],
  },
  {
    name: 'Татьяна (Камея)',
    iplist: ['195.144.229.3'],
  },
];

/**
 * Optimized IP to name lookup map
 * Built once at module load for O(1) lookup performance
 */
const ipToNameMap = new Map<string, string>();

// Initialize the map from ipMappings array
// Defensive check to ensure ipMappings is an array
if (Array.isArray(ipMappings)) {
  for (const mapping of ipMappings) {
    if (mapping && mapping.name && Array.isArray(mapping.iplist)) {
      for (const ip of mapping.iplist) {
        if (ip.trim()) {
          ipToNameMap.set(ip.trim(), mapping.name);
        }
      }
    }
  }
}

/**
 * Get name for IP address
 * Uses optimized Map lookup for O(1) performance
 * @param ip - IP address to look up
 * @returns Name if IP is mapped, undefined otherwise
 */
export function getNameForIp(ip: string): string | undefined {
  return ipToNameMap.get(ip);
}

