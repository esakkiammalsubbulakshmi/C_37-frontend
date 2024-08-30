import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CertificateManager = () => {
  const [certificates, setCertificates] = useState([]);
  const [newCertificate, setNewCertificate] = useState({
    certificate_Name: '',
    issuing_Organization: '',
    issue_Date: '',
    student_Id: '',
  });

  const [editingCertificate, setEditingCertificate] = useState(null);

  // Fetch certificates on component mount
  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get('/certificate'); // Adjust base URL as needed
      setCertificates(response.data);
    } catch (error) {
      console.error('Error fetching certificates', error);
    }
  };

  const addCertificate = async () => {
    try {
      await axios.post('/certificate', newCertificate);
      fetchCertificates();
      setNewCertificate({
        certificate_Name: '',
        issuing_Organization: '',
        issue_Date: '',
        student_Id: '',
      });
    } catch (error) {
      console.error('Error adding certificate', error);
    }
  };

  const updateCertificate = async (id) => {
    try {
      await axios.put(`/certificate/${id}`, editingCertificate);
      fetchCertificates();
      setEditingCertificate(null);
    } catch (error) {
      console.error('Error updating certificate', error);
    }
  };

  const deleteCertificate = async (id) => {
    try {
      await axios.delete(`/certificate/${id}`);
      fetchCertificates();
    } catch (error) {
      console.error('Error deleting certificate', error);
    }
  };

  return (
    <div>
      <h1>Certificate Management</h1>

      {/* Add New Certificate */}
      <div>
        <h2>Add Certificate</h2>
        <input
          type="text"
          placeholder="Certificate Name"
          value={newCertificate.certificate_Name}
          onChange={(e) => setNewCertificate({ ...newCertificate, certificate_Name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Issuing Organization"
          value={newCertificate.issuing_Organization}
          onChange={(e) => setNewCertificate({ ...newCertificate, issuing_Organization: e.target.value })}
        />
        <input-
          type="date"
          placeholder="Issue Date"
          value={newCertificate.issue_Date}
          onChange={(e) => setNewCertificate({ ...newCertificate, issue_Date: e.target.value })}
        />
        <input
          type="number"
          placeholder="Student ID"
          value={newCertificate.student_Id}
          onChange={(e) => setNewCertificate({ ...newCertificate, student_Id: e.target.value })}
        />
        <button onClick={addCertificate}>Add Certificate</button>
      </div>

      {/* List of Certificates */}
      <div>
        <h2>Certificates</h2>
        {certificates.map((certificate) => (
          <div key={certificate.id}>
            {editingCertificate?.id === certificate.id ? (
              <div>
                <input
                  type="text"
                  value={editingCertificate.certificate_Name}
                  onChange={(e) => setEditingCertificate({ ...editingCertificate, certificate_Name: e.target.value })}
                />
                <input
                  type="text"
                  value={editingCertificate.issuing_Organization}
                  onChange={(e) => setEditingCertificate({ ...editingCertificate, issuing_Organization: e.target.value })}
                />
                <input
                  type="date"
                  value={editingCertificate.issue_Date}
                  onChange={(e) => setEditingCertificate({ ...editingCertificate, issue_Date: e.target.value })}
                />
                <input
                  type="number"
                  value={editingCertificate.student_Id}
                  onChange={(e) => setEditingCertificate({ ...editingCertificate, student_Id: e.target.value })}
                />
                <button onClick={() => updateCertificate(certificate.id)}>Update</button>
              </div>
            ) : (
              <div>
                <p>
                  <strong>{certificate.certificate_Name}</strong> from {certificate.issuing_Organization} on{' '}
                  {certificate.issue_Date} for student {certificate.student_Id}
                </p>
                <button onClick={() => setEditingCertificate(certificate)}>Edit</button>
                <button onClick={() => deleteCertificate(certificate.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateManager;
