# Line_P_Monitoring_Page
This repository hosts the web page for Line P monitoring plots. 
The link to the webpage is [here](https://ios-osd-dpg.github.io/Line_P_Monitoring_Page/),
and can also be found by navigating to Deployments > github-pages on the right-hand side 
of the window. All figures are provisional. 

## Data preparation
The Python code for carrying out the processing steps is located at 
https://github.com/hhourston/ios_profile_data_visualization.
<details>
<summary>Processing steps:</summary>

1. Do oxygen data unit conversions from percent or mL/L to umol/kg as needed. 
   1. Use James Hannah’s ios-inlets code: https://github.com/cyborgsphinx/ios-inlets, but correct the oxygen percent to mL/L conversion to follow Garcia and Gordon (1992).
   2. Put correct-unit data into one CSV table for each station.
2. Apply source temperature, salinity and oxygen flags.
   1. NOAA data, only use data with a flag value of 0 (0: “accepted”). All NODC flag numbers and meanings are given in Appendix I.
3. Do data duplicate checks.
   1. Discard BOT/CHE/OSD data in favour of CTD data from the same time and location when this occurs, since CTD data typically have higher vertical resolution in the water column.
   2. Discard inexact duplicates, where a profile is within 1 hour and 0.2 decimal degrees of another profile.
4. Do latitude and longitude checks.
   1. Screen out observations having coordinates outside certain radius from the nominal station coordinates. For P26, use a radius length of half the distance from P26 to P35 (about 24.90 km). For P4, use a radius length of half the distance from P4 to P5 (about 18.50 km), and not half the distance from P3 to P4 (about 12.33 km).
5. Do depth, range, and gradient checks (the same as Garcia et al., 2019).
   1. Use the depth, range and gradient limits from Garcia et al. (2018). See Appendices II and III for the range and gradient limits, respectively. 
6.	Compute the potential temperature, absolute salinity and potential density anomaly at each observation level.
7.	Linearly interpolate profiles sampled at discrete depths to 1 m vertical resolution. Skip the interpolation if any of oxygen, potential temperature or absolute salinity are spaced more than 0.2 potential density anomaly units apart. Skip the interpolation if the observations are already at 1 m vertical resolution.
8.	Recalculate the potential density anomalies for all interpolated profiles.
9.	Select oxygen from the interpolated 1 m resolution profiles only if the potential density anomaly is within 0.005 of the specified density anomaly.
10.	Do annual averaging on each select potential density anomaly surface by taking one single average for each year for each station.
11.	Plot oxygen versus time for each station with all select potential densities on the same plot.
    1. Fit a linear or quadratic best-fit-line to the points.
</details>

## Viewing changes locally
The site is generated using [Jekyll](https://jekyllrb.com), which is the default static site generator for [GitHub Pages](https://pages.github.com).
Because the site is generated using templating, opening `index.html` directly in a browser is not going to produce great results, and will look nothing like the finished product.
In order to view your changes locally, you need to install Jekyll and then run `jekyll serve` from the root of the project (the same directory as this readme).
This will process the template and compile the site, and allow you to view it.

Running `jekyll serve` should result in something like the following:

	$ jekyll serve
	...
		Server address: http://127.0.0.1:4000
	  Server running... press ctrl-c to stop.

If you see this, just type `http://127.0.0.1:4000` into your browser and hit enter.

## References
Crawford and Peña. 2021.  In Boldt et al. 2021. State of the physical, 
biological and selected fishery resources of Pacific Canadian marine 
ecosystems in 2020. Can. Tech. Rep. Fish. Aquat. Sci. 3434: vii + 231 p.

William R. Crawford & M. Angelica Peña (2016) Decadal Trends in Oxygen 
Concentration in Subsurface Waters of the Northeast Pacific Ocean, 
Atmosphere-Ocean, 54:2, 171-192, DOI: 10.1080/07055900.2016.1158145

William R. Crawford & M. Angelica Peña (2013) Declining Oxygen on the 
British Columbia Continental Shelf, Atmosphere-Ocean, 51:1, 88-103, 
DOI:10.1080/07055900.2012.753028

Garcia H. E., K.W. Weathers, C.R. Paver, I. Smolyar, T.P. Boyer, R.A. 
Locarnini, M.M. Zweng, A.V. Mishonov, O.K. Baranova, D. Seidov, and 
J.R. Reagan (2019). World Ocean Atlas 2018, Volume 3: Dissolved Oxygen, 
Apparent Oxygen Utilization, and Dissolved Oxygen Saturation. A. 
Mishonov Technical Editor. *NOAA Atlas NESDIS 83*, 38pp. (Available at 
https://www.nodc.noaa.gov/OC5/woa18/pubwoa18.html).

Garcia, H. E., T. P. Boyer, R. A. Locarnini, O. K. Baranova, M. M. 
Zweng (2018). World Ocean Database 2018: User’s Manual (prerelease). 
A.V. Mishonov, Technical Ed., NOAA, Silver Spring, MD (Available at 
https://www.NCEI.noaa.gov/OC5/WOD/pr_wod.html). 

Hernan E. Garcia & Louis I. Gordon (1992) Oxygen solubility in seawater: 
Better fitting equations, Limnol. Oceanogr., 37(6), 1992, 1 307-1312.

