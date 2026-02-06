// AdminDashboard.jsx - Enhanced Version
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import Logo from "./Logo";
import "./adminstyles.css";
import CustomModal from "./CustomModal";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Enhanced card data with icons and categories
  const cardData = [
    {
      title: "Add Product",
      description: "Create and manage new product listings with validation",
      team: "Product Management",
      modalType: "addProduct",
      icon: "📦",
      color: "#4F46E5",
      category: "Products"
    },
    {
      title: "Delete Product",
      description: "Remove products from inventory system",
      team: "Product Management",
      modalType: "deleteProduct",
      icon: "🗑️",
      color: "#DC2626",
      category: "Products"
    },
    {
      title: "Modify User",
      description: "Update user details and manage roles",
      team: "User Management",
      modalType: "modifyUser",
      icon: "👤",
      color: "#059669",
      category: "Users"
    },
    {
      title: "View User Details",
      description: "Fetch and display details of a specific user",
      team: "User Management",
      modalType: "viewUser",
      icon: "🔍",
      color: "#0891B2",
      category: "Users"
    },
    {
      title: "Monthly Business",
      description: "View revenue metrics for specific months",
      team: "Analytics",
      modalType: "monthlyBusiness",
      icon: "📊",
      color: "#7C3AED",
      category: "Analytics"
    },
    {
      title: "Daily Business",
      description: "Track daily revenue and transactions",
      team: "Analytics",
      modalType: "dailyBusiness",
      icon: "📅",
      color: "#EA580C",
      category: "Analytics"
    },
    {
      title: "Yearly Business",
      description: "Analyze annual revenue performance",
      team: "Analytics",
      modalType: "yearlyBusiness",
      icon: "📈",
      color: "#9333EA",
      category: "Analytics"
    },
    {
      title: "Overall Business",
      description: "View total revenue since inception",
      team: "Analytics",
      modalType: "overallBusiness",
      icon: "💰",
      color: "#CA8A04",
      category: "Analytics"
    },
  ];

  const categories = ["All", "Products", "Users", "Analytics"];

  // Filter cards based on search and category
  const filteredCards = cardData.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         card.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || card.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Add notification helper
  const addNotification = (message, type = "success") => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(notif => notif.id !== id));
    }, 5000);
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:9090/admin/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        addNotification("Logged out successfully", "success");
        setTimeout(() => navigate("/"), 1000);
      } else {
        addNotification("Failed to log out", "error");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      addNotification("Error during logout", "error");
    } finally {
      setLoading(false);
    }
  };

  // Enhanced API handlers with loading states and notifications
  const handleAddProductSubmit = async (productData) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:9090/admin/products/add", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      const data = await response.json();
      setResponse({ product: data, imageUrl: productData.imageUrl });
      setModalType("addProduct");
      addNotification("Product added successfully", "success");
    } catch (error) {
      console.error("Error adding product:", error);
      addNotification("Error adding product", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProductSubmit = async ({ productId }) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:9090/admin/products/delete", {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      const message = await response.text();

      if (response.ok) {
        addNotification(message, "success");
        // optionally refresh product list
        // fetchProducts();
      } else {
        addNotification(message, "error");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      addNotification("Error deleting product", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleViewUserSubmit = async ({ userId }) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:9090/admin/user/getbyid", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setResponse({ user: data });
        setModalType("response");
        addNotification("User details fetched", "success");
      } else {
        const errorMessage = await response.text();
        setResponse({ message: `Error: ${errorMessage}` });
        setModalType("response");
        addNotification(errorMessage, "error");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      setResponse({ message: "Error: Something went wrong" });
      setModalType("response");
      addNotification("Error fetching user details", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleModifyUserSubmit = async (data) => {
    setLoading(true);
    if (!data.username) {
      // Fetch user details
      try {
        const response = await fetch(
          "http://localhost:9090/admin/user/getbyid",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: data.userId }),
          }
        );
        
        if (response.ok) {
          const userDetails = await response.json();
          setResponse({ user: userDetails });
          setModalType("modifyUser");
        } else {
          const error = await response.text();
          setResponse({ message: `Error: ${error}` });
          setModalType("response");
          addNotification(error, "error");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setResponse({ message: "Error: Something went wrong" });
        setModalType("response");
        addNotification("Error fetching user details", "error");
      } finally {
        setLoading(false);
      }
    } else {
      // Update user details
      try {
        const response = await fetch(
          "http://localhost:9090/admin/user/modify",
          {
            method: "PUT",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        
        if (response.ok) {
          const updatedUser = await response.json();
          setResponse({ user: updatedUser });
          setModalType("response");
          addNotification("User updated successfully", "success");
        } else {
          const error = await response.text();
          setResponse({ message: `Error: ${error}` });
          setModalType("response");
          addNotification(error, "error");
        }
      } catch (error) {
        console.error("Error updating user details:", error);
        setResponse({ message: "Error: Something went wrong" });
        setModalType("response");
        addNotification("Error updating user", "error");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleMonthlyBusiness = async (data) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:9090/admin/business/monthly?month=${data?.month}&year=${data?.year}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      if (response.ok) {
        const responseData = await response.json();
        setResponse({ monthlyBusiness: responseData });
        setModalType("monthlyBusiness");
        addNotification("Monthly business data loaded", "success");
      } else {
        const errorMessage = await response.text();
        setResponse({ message: `Error: ${errorMessage}` });
        setModalType("monthlyBusiness");
        addNotification(errorMessage, "error");
      }
    } catch (error) {
      console.error("Error fetching monthly business:", error);
      setResponse({ message: "Error: Something went wrong" });
      setModalType("response");
      addNotification("Error fetching data", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDailyBusiness = async (data) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:9090/admin/business/daily?date=${data?.date}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      if (response.ok) {
        const responseData = await response.json();
        setResponse({ dailyBusiness: responseData });
        setModalType("dailyBusiness");
        addNotification("Daily business data loaded", "success");
      } else {
        const errorMessage = await response.text();
        setResponse({ message: `Error: ${errorMessage}` });
        setModalType("dailyBusiness");
        addNotification(errorMessage, "error");
      }
    } catch (error) {
      console.error("Error fetching daily business:", error);
      setResponse({ message: "Error: Something went wrong" });
      setModalType("dailyBusiness");
      addNotification("Error fetching data", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleYearlyBusiness = async (data) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:9090/admin/business/yearly?year=${data?.year}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      if (response.ok) {
        const responseData = await response.json();
        setResponse({ yearlyBusiness: responseData });
        setModalType("yearlyBusiness");
        addNotification("Yearly business data loaded", "success");
      } else {
        const errorMessage = await response.text();
        setResponse({ message: `Error: ${errorMessage}` });
        setModalType("yearlyBusiness");
        addNotification(errorMessage, "error");
      }
    } catch (error) {
      console.error("Error fetching yearly business:", error);
      setResponse({ message: "Error: Something went wrong" });
      setModalType("yearlyBusiness");
      addNotification("Error fetching data", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleOverallBusiness = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:9090/admin/business/overall`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      if (response.ok) {
        const data = await response.json();
        setResponse({ overallBusiness: data });
        setModalType("overallBusiness");
        addNotification("Overall business data loaded", "success");
      } else {
        const errorMessage = await response.text();
        setResponse({ message: `Error: ${errorMessage}` });
        setModalType("overallBusiness");
        addNotification(errorMessage, "error");
      }
    } catch (error) {
      console.error("Error fetching overall business:", error);
      setResponse({ message: "Error: Something went wrong" });
      setModalType("overallBusiness");
      addNotification("Error fetching data", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-dashboard-enhanced">
      {/* Loading Overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Processing...</p>
          </div>
        </div>
      )}

      {/* Notifications */}
      <div className="notifications-container">
        {notifications.map(notif => (
          <div key={notif.id} className={`notification notification-${notif.type}`}>
            <span className="notification-icon">
              {notif.type === "success" ? "✓" : "⚠"}
            </span>
            <span className="notification-message">{notif.message}</span>
            <button 
              className="notification-close"
              onClick={() => setNotifications(prev => prev.filter(n => n.id !== notif.id))}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="dashboard-header-enhanced">
        <div className="header-left">
          <Logo />
          <div className="header-divider"></div>
          <h1 className="dashboard-title">Admin Control Center</h1>
        </div>
        <div className="header-right">
          <div className="admin-badge">
           
            <span className="badge-text">Admin</span>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            <span className="logout-icon">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="controls-section">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search functions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {category !== "All" && (
                <span className="category-count">
                  {cardData.filter(c => c.category === category).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="dashboard-content-enhanced">
        <div className="cards-grid-enhanced">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <div
                key={index}
                className="card-enhanced"
                style={{ 
                  '--card-color': card.color,
                  animationDelay: `${index * 0.05}s`
                }}
                onClick={() => {
                  setModalType(card.modalType);
                  setModalData(null);
                }}
              >
                <div className="card-icon" style={{ background: card.color }}>
                  {card.icon}
                </div>
                <div className="card-body">
                  <h3 className="card-title-enhanced">{card.title}</h3>
                  <p className="card-description-enhanced">{card.description}</p>
                  <div className="card-footer">
                    <span className="card-team">
                      <span className="team-dot" style={{ background: card.color }}></span>
                      {card.team}
                    </span>
                    <span className="card-arrow">→</span>
                  </div>
                </div>
                <div className="card-shine"></div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <h3>No functions found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {modalType && (
        <CustomModal
          modalType={modalType}
          onClose={() => {
            setModalType(null);
            setResponse(null);
          }}
          onSubmit={(data) => {
            switch (modalType) {
              case "addProduct":
                handleAddProductSubmit(data);
                break;
              case "deleteProduct":
                handleDeleteProductSubmit(data);
                break;
              case "viewUser":
                handleViewUserSubmit(data);
                break;
              case "modifyUser":
                handleModifyUserSubmit(data);
                break;
              case "monthlyBusiness":
                handleMonthlyBusiness(data);
                break;
              case "dailyBusiness":
                handleDailyBusiness(data);
                break;
              case "yearlyBusiness":
                handleYearlyBusiness(data);
                break;
              case "overallBusiness":
                handleOverallBusiness();
                break;
              default:
                break;
            }
          }}
          response={response}
        />
      )}
    </div>
  );
};

export default AdminDashboard;