import React from 'react';
import axios from 'axios';
import styles from './CreateTableForm.module.scss';

export default function CreateTableForm() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const tableName = e.target.elements.tableName.value;

    try {
      const response = await axios.post('/api/tables', { name: tableName });
      console.log(response.data); // handle the response from the API
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Create Table</h2>
      <form >
        <div className={styles.formGroup}>
          <label htmlFor="tableName" className={styles.formLabel}>
            Table Name
          </label>
          <input
            type="text"
            name="tableName"
            id="tableName"
            placeholder="Enter table name"
            className={styles.formInput}
          />
        </div>
        <button type="submit" className={styles.formButton}>
          Create Table
        </button>
      </form>
    </div>
  );
}