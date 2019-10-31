@extends('layout')

@section('content')

    @if($errors->count())

        @foreach($errors->all() as $error)
            <div class="alert-danger">{{ $error }}</div>
        @endforeach

    @endif

    <form action="{{ route('login') }}" method="post">
        @csrf

        <div class="form-group">
            <label for="">Email</label><br>
            <input class="form-control" type="email" name="email" value="{{ old('email') }}">
        </div>

        <div class="form-group">
            <label for="">Password</label><br>
            <input class="form-control" type="password" name="password" value="">
        </div>

        <button type="submit" class="btn btn-primary">Log in</button>
    
    </form>

@endsection