// halaman loading

export const LoadingElementsss = () => {
  return (
    <>
      <div class="flex items-center justify-center h-[88vh] space-x-4">
        <div class="relative">
          <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
        </div>
        <p className="font-bold text-4xl text-slate-500">Loading...</p>
      </div>
    </>
  );
};
