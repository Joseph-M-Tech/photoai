import { Download } from 'lucide-react';

export default function GenerationGallery({ images, isLoading }) {
  // Mock function for downloading an image
  const handleDownload = (imageUrl, imageId) => {
    console.log(`Downloading image ${imageId} from ${imageUrl}`);
    // Real implementation would use a library like `file-saver`
    // saveAs(imageUrl, `photoai-${imageId}.jpg`);
    alert(`Download functionality would save: ${imageUrl}`);
  };

  if (images.length === 0 && !isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Your generated photos will appear here.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {isLoading && (
        // Skeleton loader for the first card while generating
        <div className="rounded-lg overflow-hidden bg-gray-200 animate-pulse aspect-square"></div>
      )}
      {images.map((image) => (
        <div key={image.id} className="group relative rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
          <img
            src={image.url}
            alt={image.prompt}
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-700 truncate">{image.prompt}</p>
          </div>
          <button
            onClick={() => handleDownload(image.url, image.id)}
            className="absolute top-2 right-2 p-2 bg-white text-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-gray-50"
            title="Download"
          >
            <Download className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}