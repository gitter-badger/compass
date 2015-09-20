# encoding: utf-8

Compass::App.controllers :page do
  # , :cache => true
  # expires 86400*30

  # :cache => true

  # get :index, :map => '/foo/bar' do
  #   session[:foo] = 'bar'
  #   render 'index'
  # end

  # get :sample, :map => '/sample/url', :provides => [:any, :js] do
  #   case content_type
  #     when :js then ...
  #     else ...
  # end

  # get :foo, :with => :id do
  #   'Maps to url '/foo/#{params[:id]}''
  # end

  # get '/example' do
  #   'Hello world!'
  # end
  
  get :index, :map => '/' do
    cache_key :index
    # @title="Контакты"
    # if request.xhr?
    #   render :'page/contacts', layout: false
    # else
    # render :text => "", :layout => true
    render 'layouts/application'
    # end

  end

  # get :price, :map => '/price' do
  #   # cache_key :price
  #   @title="Цены"
  #
  #   # haml :'page/price'
  #   if request.xhr?
  #     render :'page/price', layout: false
  #   else
  #     haml :'page/price',  layout: true
  #   end
  # end

end
