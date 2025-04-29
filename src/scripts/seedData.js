import { db } from '../firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const seedData = async () => {
  const tips = [
    {
      title: "Edge Computing for Sustainable Mobile Applications",
      content: "Edge computing reduces latency and energy consumption by processing data closer to the source. This approach significantly decreases the need for constant cloud communication, leading to lower energy usage and improved performance for mobile applications.",
      category: "mobile",
      stats: {
        "Latency Reduction": "Up to 60%",
        "Energy Savings": "40%",
        "Bandwidth Usage": "Reduced by 50%"
      },
      references: [
        {
          title: "Edge Computing: A Sustainable Approach to Mobile Computing",
          url: "https://example.com/edge-computing"
        }
      ]
    },
    {
      title: "Green Cloud Computing: Optimizing Data Center Efficiency",
      content: "Modern cloud data centers are implementing innovative cooling techniques and renewable energy sources to reduce their carbon footprint. Virtualization and containerization technologies are helping optimize resource utilization.",
      category: "cloud",
      stats: {
        "Carbon Footprint": "Reduced by 35%",
        "Energy Efficiency": "Improved by 45%",
        "Resource Utilization": "Increased by 60%"
      },
      references: [
        {
          title: "Sustainable Cloud Computing Practices",
          url: "https://example.com/green-cloud"
        }
      ]
    },
    {
      title: "Privacy-Preserving Data Sharing in Cloud Environments",
      content: "Advanced encryption techniques and zero-knowledge proofs are enabling secure data sharing while maintaining privacy. These technologies ensure that sensitive information remains protected even in distributed cloud environments.",
      category: "security",
      stats: {
        "Data Protection": "99.99%",
        "Encryption Speed": "Improved by 30%",
        "Compliance Rate": "100%"
      },
      references: [
        {
          title: "Secure Data Sharing in Cloud Computing",
          url: "https://example.com/cloud-security"
        }
      ]
    },
    {
      title: "Optimizing Data Synchronization for Mobile Apps",
      content: "Efficient data synchronization strategies reduce network usage and improve battery life in mobile applications. Techniques like differential sync and conflict resolution algorithms ensure data consistency while minimizing resource usage.",
      category: "sync",
      stats: {
        "Sync Efficiency": "Improved by 70%",
        "Battery Usage": "Reduced by 25%",
        "Data Transfer": "Optimized by 40%"
      },
      references: [
        {
          title: "Efficient Data Synchronization Methods",
          url: "https://example.com/data-sync"
        }
      ]
    },
    {
      title: "Performance Optimization in Cloud-Native Applications",
      content: "Cloud-native applications leverage microservices architecture and container orchestration to achieve optimal performance. Auto-scaling and load balancing ensure efficient resource utilization while maintaining high availability.",
      category: "performance",
      stats: {
        "Response Time": "Reduced by 50%",
        "Resource Usage": "Optimized by 35%",
        "Scalability": "Improved by 80%"
      },
      references: [
        {
          title: "Cloud-Native Performance Optimization",
          url: "https://example.com/cloud-performance"
        }
      ]
    }
  ];

  try {
    for (const tip of tips) {
      await addDoc(collection(db, "tips"), {
        ...tip,
        timestamp: serverTimestamp()
      });
    }
    console.log("Successfully seeded data!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

export default seedData; 