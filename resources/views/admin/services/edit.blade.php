@extends('layouts.admin')

@section('title', 'Edit Service')

@section('content')
<div class="max-w-4xl mx-auto">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-yellow-400">Edit Service</h1>
        <a href="{{ route('admin.services.index') }}" 
           class="text-yellow-400 hover:text-yellow-300">
            <i class="fas fa-arrow-left mr-2"></i>Back to Services
        </a>
    </div>

    <form action="{{ route('admin.services.update', $service) }}" 
          method="POST" 
          enctype="multipart/form-data"
          class="bg-black rounded-lg shadow p-6 space-y-6">
        @csrf
        @method('PUT')

        @if($errors->any())
            <div class="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded mb-6">
                <ul class="list-disc list-inside">
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <div>
            <label class="block text-sm font-medium text-yellow-400 mb-2">Title</label>
            <input type="text" 
                   name="title" 
                   value="{{ old('title', $service->title) }}" 
                   required 
                   class="w-full px-4 py-2 rounded bg-zinc-900 text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            @error('title')
                <p class="mt-1 text-red-500 text-sm">{{ $message }}</p>
            @enderror
        </div>

        <div>
            <label class="block text-sm font-medium text-yellow-400 mb-2">Description</label>
            <textarea name="description" 
                      rows="4" 
                      required
                      class="w-full px-4 py-2 rounded bg-zinc-900 text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400">{{ old('description', $service->description) }}</textarea>
            @error('description')
                <p class="mt-1 text-red-500 text-sm">{{ $message }}</p>
            @enderror
        </div>

        <div>
            <label class="block text-sm font-medium text-yellow-400 mb-2">Image</label>
            @if($service->image)
                <div class="mb-2">
                    <img src="{{ asset('storage/' . $service->image) }}" 
                         alt="{{ $service->title }}" 
                         class="h-32 w-auto rounded">
                </div>
            @endif
            <input type="file" 
                   name="image" 
                   accept="image/*"
                   class="w-full px-4 py-2 rounded bg-zinc-900 text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <p class="mt-1 text-sm text-yellow-400/60">Leave empty to keep the current image. Recommended size: 800x600px</p>
            @error('image')
                <p class="mt-1 text-red-500 text-sm">{{ $message }}</p>
            @enderror
        </div>

        <div>
            <label class="block text-sm font-medium text-yellow-400 mb-2">Icon (FontAwesome class)</label>
            <input type="text" 
                   name="icon" 
                   value="{{ old('icon', $service->icon) }}" 
                   required 
                   placeholder="fas fa-cog"
                   class="w-full px-4 py-2 rounded bg-zinc-900 text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <p class="mt-1 text-sm text-yellow-400/60">Enter a FontAwesome icon class (e.g., fas fa-cog)</p>
            @error('icon')
                <p class="mt-1 text-red-500 text-sm">{{ $message }}</p>
            @enderror
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label class="block text-sm font-medium text-yellow-400 mb-2">Order</label>
                <input type="number" 
                       name="order" 
                       value="{{ old('order', $service->order) }}" 
                       required 
                       min="0"
                       class="w-full px-4 py-2 rounded bg-zinc-900 text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                @error('order')
                    <p class="mt-1 text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>

            <div>
                <label class="block text-sm font-medium text-yellow-400 mb-2">Status</label>
                <label class="inline-flex items-center mt-2">
                    <input type="checkbox" 
                           name="is_active" 
                           value="1" 
                           {{ old('is_active', $service->is_active) ? 'checked' : '' }}
                           class="rounded border-yellow-400 text-yellow-400 focus:ring-yellow-400 bg-zinc-900">
                    <span class="ml-2 text-yellow-100">Active</span>
                </label>
            </div>
        </div>

        <div class="flex justify-end">
            <button type="submit" 
                    class="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300">
                Update Service
            </button>
        </div>
    </form>
</div>
@endsection
