import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface GalleryImage {
  id: string;
  image_url: string;
  title: string;
  description: string;
}

export function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching gallery:', error);
      } else {
        setImages(data || []);
      }
      setLoading(false);
    }

    fetchGallery();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  const placeholderImages = [
    {
      id: '1',
      image_url: 'https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Classic French Manicure',
      description: 'Timeless elegance with a modern twist'
    },
    {
      id: '2',
      image_url: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Gel Polish Design',
      description: 'Long-lasting color and shine'
    },
    {
      id: '3',
      image_url: 'https://images.pexels.com/photos/1570693/pexels-photo-1570693.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Nail Art Creation',
      description: 'Custom designs for every occasion'
    },
    {
      id: '4',
      image_url: 'https://images.pexels.com/photos/3997360/pexels-photo-3997360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Acrylic Extensions',
      description: 'Perfect length and shape'
    },
    {
      id: '5',
      image_url: 'https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Spa Pedicure',
      description: 'Relax and rejuvenate'
    },
    {
      id: '6',
      image_url: 'https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Trendy Nail Designs',
      description: 'Stay ahead of the latest styles'
    }
  ];

  const displayImages = images.length > 0 ? images : placeholderImages;

  return (
    <section className="gallery-section">
      <div className="container">
        <h1 className="section-title">Gallery</h1>
        <p className="section-subtitle">
          Browse our collection of beautiful nail designs and transformations
        </p>

        <div className="gallery-grid">
          {displayImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img
                src={image.image_url}
                alt={image.title}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-title">{image.title}</h3>
                <p className="gallery-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
