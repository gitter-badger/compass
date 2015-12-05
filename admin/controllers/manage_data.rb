# encoding: utf-8

require 'fileutils'

Compass::Admin.controllers :manage_data do

  get "/dashboard", :map => '/manage_data/index' do
    render "manage_data/index"
  end



  get '/download/:filename', :map => '/download/:filename' do |filename|
    file_download(filename)
  end


  post "/upload", :map => '/upload' do

    if  params['file'].nil? || params['file'].empty?
      flash[:warning] = "Неудача! Файл - отсутствует"
      redirect '/admin/dashboard'

    elsif file_upload(params['file'][:filename])
      flash[:success] = "Успех! Файл: #{params['file'][:filename]} добавлен."
      redirect '/admin/dashboard'
    else
      flash[:warning] = "Неудача! Файл: #{params['file'][:filename]} назван с ошибкой."
      redirect '/admin/dashboard'
    end

end


  post '/update', :map => '/update' do

    params.inspect


  end






end
