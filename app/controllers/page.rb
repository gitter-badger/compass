Compass::App.controllers :page, :cache => true do

  expires 3600
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
  
  get :contacts, :map => '/' do
    cache_key :contacts
    haml :'page/contacts'
  end

  get :price do
    cache_key :price
    haml :'page/price'
  end

end
