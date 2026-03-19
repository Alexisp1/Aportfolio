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
      title: 'Classic French',
      description: 'Timeless elegance'
    },
    {
      id: '2',
      image_url: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Gel Perfection',
      description: 'Long-lasting shine'
    },
    {
      id: '3',
      image_url: 'https://images.pexels.com/photos/1570693/pexels-photo-1570693.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Artistic Expression',
      description: 'Custom designs'
    },
    {
      id: '4',
      image_url: 'https://images.pexels.com/photos/3997360/pexels-photo-3997360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Extension Art',
      description: 'Perfect length'
    },
    {
      id: '5',
      image_url: 'https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Spa Luxury',
      description: 'Ultimate relaxation'
    },
    {
      id: '6',
      image_url: 'https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Trending Styles',
      description: 'Latest looks'
    }
  ];

  const displayImages = images.length > 0 ? images : placeholderImages;

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <p>A showcase of our finest work</p>
      </div>

      <div className="gallery-masonry">
        {displayImages.map((image, index) => (
          <div key={image.id} className={`gallery-cell cell-${(index % 3) + 1}`}>
            <img src={image.image_url} alt={image.title} />
            <div className="gallery-caption">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
