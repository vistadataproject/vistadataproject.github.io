---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VBECS HOSPITAL LOCATION LOOKUP<br/>
# VBECS HOSPITAL LOCATION LOOKUP

This RPC returns XML containing a list of Hospital Locations from the HOSPITAL LOCATION file (#44) of either Ward or Clinic Type for use in VBECS when issuing units to a location other than the Blood Bank. XML Mapping:LocationName element = HOSPITAL LOCATION file (#44) / NAME field (#.01)LocationIEN element =  HOSPITAL LOCATION file (#44) / NUMBER field (#.001)LocationType element = HOSPITAL LOCATION file (#44) / TYPE field (#2) XML Example:<HospitalLocations>    <Location>        <LocationName>6W REHAB-KC</LocationName>        <LocationIEN>503</LocationIEN>        <LocationType>W</LocationType>    </Location>    <Location>        <LocationName>7E PCUS-KC</LocationName>        <LocationIEN>504</LocationIEN>        <LocationType>W</LocationType>    </Location>    <Location>        <LocationName>KC-GI RESEARCH</LocationName>        <LocationIEN>511</LocationIEN>        <LocationType>C</LocationType>    </Location></HospitalLocations>

## Properties

Property | Value
--- | ---
Label | LOC
MUMPS Implementation | [VBECRPCD](http://code.osehra.org/dox/Routine_VBECRPCD_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIV | LITERAL | 999 | true | Input DIV &#x3D; DIVISION Name



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}