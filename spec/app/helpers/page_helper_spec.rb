require 'spec_helper'

describe "sinatra_rendering.rb" do
  before(:all) { launch :sinatra_rendering }

  it "should get the original content" do
    visit "/"
    body.should == "header_logo__sitename"
  end
end