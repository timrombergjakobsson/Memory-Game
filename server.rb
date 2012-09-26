require 'nokogiri'
require 'open-uri'

doc = Nokogiri::HTML(open('http://labs.funspot.tv/worktest_color_memory/colours.conf'))
puts doc.css("p strong:first-child")[0].content