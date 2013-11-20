# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload' do
  watch(%r{step1/.+})
  watch(%r{step2/.+})
  # Rails Assets Pipeline
end

guard 'sass', :input => 'step1/sass', :output => 'step1/css'
guard 'sass', :input => 'step2/sass', :output => 'step2/css'
