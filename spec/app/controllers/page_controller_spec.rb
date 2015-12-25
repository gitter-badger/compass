# coding: utf-8

require 'spec_helper'

RSpec.describe "Basic page" do

    it "loads homepage" do
      get '/'
      expect(last_response).to be_ok
      end
  it "returns logo h1" do
    get '/'
    expect(last_response.body).to include("Маслов Сервис")
  end

  it "returns page-block" do
    get '/'
    expect(last_response.body).to include("Maslov")
  end


  it "map is loading" do
    get '/'
    expect(last_response.body).to include("map")
  end








end
