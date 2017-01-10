---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG UTIL CLNLOC 

 property | value 
--- | --- 
 label | MAG UTIL CLNLOC
 tag | NETLOC
 routine | [MAGSDEL5](http://code.osehra.org/dox/Routine_MAGSDEL5_source.html)
 return value type | ARRAY
 description | MAG UTILITY - Delete a Network Location that has no references to images. Input Parameters   IN : Network Location IEN   PLACE : User SITE PARAMETER IEN      STEP : IEN range to run - format = <startIEN>#<endIEN>  Output Parameter:   OUT : Array of results RPC to delete a network location. If no image files are linked to the network location, the selected entry will be removed. 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 6 | true | NETWORK LOCATION IEN | 
| vs:Input_Parameter-8994_02 | PLACE | LITERAL | 2 | true | PLACE OF IMAGE SITE PARAMETERS | 
| vs:Input_Parameter-8994_02 | STEP | LITERAL |  | true | Used to create chunks of data(iens) for processing.  This is used to eliminate Broker timeouts during processing. | 