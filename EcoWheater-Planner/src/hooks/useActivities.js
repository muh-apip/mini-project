import { useState, useEffect } from "react";
import {
  fetchActivities,
  addActivity,
  deleteActivity,
  updateActivity,
} from "../services/activityService";

export function useActivities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchActivities();
        setActivities(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addNewActivity = async (newActivity) => {
    try {
      const addedActivity = await addActivity(newActivity);
      setActivities((prev) => [...prev, addedActivity]);
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteExistingActivity = async (id) => {
    try {
      await deleteActivity(id);
      setActivities((prev) => prev.filter((activity) => activity.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const updateExistingActivity = async (id, updatedActivity) => {
    try {
      const updated = await updateActivity(id, updatedActivity);
      setActivities((prev) =>
        prev.map((activity) =>
          activity.id === id ? updated : activity
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    activities,
    loading,
    error,
    addNewActivity,
    deleteExistingActivity,
    updateExistingActivity,
  };
}
