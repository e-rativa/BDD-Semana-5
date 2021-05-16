if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

  $versionapp='2'
  $featurescenariostep='cualquierMierda'
  $id= 1;

  Then(/^I store a variable with the current url$/) do
    $url_variable = @driver.current_url    
    File.write('./.variable.txt', $url_variable)
    puts($url_variable) 
  end

  Given(/^I navigate to page with the url stored in the variable$/) do
    $url_variable = IO.read("./.variable.txt")  
    puts($url_variable)
    @driver.navigate.to $url_variable
    sleep 2
  end

  Then(/^I want to save this file with the given version "([^\"]*)" and stepname "([^\"]*)"$/) do |version,stepname|
    $featurescenariostep=stepname
    $versionapp='Ghost'+version

  end



 # Hooks
 AfterStep do |_scenario|
  Dir.mkdir("./tvr") unless File.exist?("./tvr")
  Dir.mkdir("./tvr/#{$versionapp}") unless File.exist?("./tvr/#{$versionapp}")
  Dir.mkdir("./tvr/#{$versionapp}/#{$featurescenariostep}") unless File.exist?("./tvr/#{$versionapp}/#{$featurescenariostep}")
  path = "./tvr/#{$versionapp}/#{$featurescenariostep}/#{$featurescenariostep}_#{$id}_.png"
  @driver.save_screenshot(path)
  embed(path, 'image/png', File.basename(path))
  $id=$id+1
end
end