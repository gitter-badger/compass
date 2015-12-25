require 'spec_helper'

RSpec.describe "Admin page" do

  it "loads adminepage" do
    get '/admin/sessions/new'
    expect(last_response).to be_ok
  end

  # it "loads login form" do
  #   get '/admin/sessions/new'
  #   FactoryGirl.build(:editor)
  #   expect(last_response.body).to include('form')
  # end



end