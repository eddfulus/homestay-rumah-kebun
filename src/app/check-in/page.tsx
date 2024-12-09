export default function CheckIn() {
    return (
        <div className="container mx-auto p-8 max-w-2xl">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Cara Check In</h1>
                <p className="text-lg text-gray-600">Password wifi: <span className="font-semibold">rumah2022</span></p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Cara Check Out</h1>
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                    <li>Kalau ada alih perabot, mintak letak tempat asal</li>
                    <li>Tutup semua paip air dan suis elektrik</li>
                    <li>Timer aircond di remote control di tutup</li>
                    <li>Tutup suis pam air (db blkg peti sejuk)</li>
                    <li>Pintu dan tingkap ditutup rapat</li>
                    <li>Sampah dibersihkan dan letak di dalam tong sampah besar</li>
                    <li>Bagi gambar dalam dan luar rumah before check out</li>
                </ol>
            </div>
        </div>
    );
}