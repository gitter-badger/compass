Compass::App.controllers :page, :cache => true do
# ,
  expires 86400*30

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
    @title='Контакты'
    if request.xhr?
      render :'page/contacts', layout: false
    else
      haml :'page/contacts', layout: true
    end

  end

  get :price, :map => '/price' do
    cache_key :price
    @title='Цены'

    # haml :'page/price'
    if request.xhr?
      render :'page/price', layout: false
    else
      haml :'page/price',  layout: true
    end
  end

end
