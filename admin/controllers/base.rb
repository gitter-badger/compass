Compass::Admin.controllers :base do

  get :index, :map => "/" do
    render "base/index"
  end

  # get 'admin/download' do
  #   "Hello World"
  # end
  #
  # post "/upload" do
  #   File.open('uploads/' + params['myfile'][:filename], "w") do |f|
  #     f.write(params['myfile'][:tempfile].read)
  #   end
  #   return "The file was successfully uploaded!"
  # end
  #
  #
  # get '/download/:filename' do |filename|
  #   "#{filename}"
  #   file = File.join('/public/data', filename)
  #   send_file(file, :disposition => 'attachment', :filename => File.basename(file))
  # end
  #

  #
  # post '/upload', :map => '/upload' do
  #   tempfile = params['file'][:tempfile]
  #   filename = params['file'][:filename]
  #   File.copy(tempfile.path, "./files/#{filename}")
  #   redirect '/'
  # end





end
