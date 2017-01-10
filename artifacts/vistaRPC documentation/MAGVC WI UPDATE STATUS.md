---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVC WI UPDATE STATUS 

 property | value 
--- | --- 
 label | MAGVC WI UPDATE STATUS
 tag | ACTUPD8
 routine | [MAGVCWIA](http://code.osehra.org/dox/Routine_MAGVCWIA_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC allows the Storage Commit Application to update the STATUS (#3)of an item in the MAG WORK ITEM file (#2006.941). (MAG*3.0*79).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | WIIEN | LITERAL |  | true | This is the IEN of the MAG WORK ITEM file (#2006.941) entry to be modified. | 
| vs:Input_Parameter-8994_02 | STATNEW | LITERAL |  |  | This is the external form of the new STATUS in the MAG WORK ITEM STATUS file(#2006.9413). | 