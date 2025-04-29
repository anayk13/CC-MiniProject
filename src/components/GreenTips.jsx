// GreenTips.js
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { FaLeaf, FaChartLine, FaCloud, FaMobile, FaLock, FaSync } from "react-icons/fa";

function GreenTips() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const fetchTips = async () => {
      try {
        console.log("Fetching tips...");
        const tipsCollection = collection(db, "tips");
        const q = query(tipsCollection, orderBy("timestamp", "desc"));
        const snapshot = await getDocs(q);
        console.log("Snapshot size:", snapshot.size);
        const tipList = snapshot.docs.map(doc => {
          const data = doc.data();
          console.log("Document data:", data);
          return { id: doc.id, ...data };
        });
        console.log("Processed tips:", tipList);
        setTips(tipList);
      } catch (error) {
        console.error("Error fetching tips:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  const categories = [
    { id: 'all', name: 'All Topics', icon: <FaLeaf /> },
    { id: 'cloud', name: 'Cloud Computing', icon: <FaCloud /> },
    { id: 'mobile', name: 'Mobile Solutions', icon: <FaMobile /> },
    { id: 'security', name: 'Security & Privacy', icon: <FaLock /> },
    { id: 'performance', name: 'Performance', icon: <FaChartLine /> },
    { id: 'sync', name: 'Data Synchronization', icon: <FaSync /> }
  ];

  const filteredTips = activeTab === 'all' 
    ? tips 
    : tips.filter(tip => tip.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          🌍 Green IT Research Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Exploring sustainable cloud computing, mobile solutions, and data management practices
          for a greener digital future
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-all ${
                activeTab === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-600 hover:bg-green-50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">Error: {error}</p>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading research insights...</p>
          </div>
        ) : filteredTips.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found for this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTips.map(tip => (
              <article
                key={tip.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-green-600 mr-2">
                      {categories.find(c => c.id === tip.category)?.icon}
                    </span>
                    <span className="text-sm text-gray-500 capitalize">{tip.category}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">{tip.title}</h2>
                  <p className="text-gray-600 mb-4">{tip.content}</p>
                  
                  {tip.stats && (
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <h3 className="text-sm font-semibold text-green-800 mb-2">Key Metrics</h3>
                      <ul className="space-y-2">
                        {Object.entries(tip.stats).map(([key, value]) => (
                          <li key={key} className="flex justify-between text-sm">
                            <span className="text-gray-600">{key}</span>
                            <span className="font-medium text-green-700">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tip.references && tip.references.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">References</h3>
                      <ul className="space-y-1">
                        {tip.references.map((ref, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            <a 
                              href={ref.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-green-600 hover:underline"
                            >
                              {ref.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <footer className="py-8 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="border-b border-green-700 pb-6">
              <h3 className="text-lg font-semibold mb-4">Created by</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <span className="font-medium">Anay Kumar</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">Sujal Kumar</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">Sanskar Lodha</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">Kush Gujrathi</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm">
                © {new Date().getFullYear()} Green IT Research Hub. 
                Powered by Firebase and Cloud Computing.
              </p>
              <p className="text-xs mt-2 text-green-300">
                Focused on sustainable cloud solutions, data privacy, and efficient computing
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GreenTips;