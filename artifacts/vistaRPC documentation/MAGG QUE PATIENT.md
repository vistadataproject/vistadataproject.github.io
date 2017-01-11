---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG QUE PATIENT 

 property | value 
--- | --- 
 label | MAGG QUE PATIENT
 tag | QUEPAT
 routine | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
 return value type | SINGLE VALUE
 description | This is called for a PREFETCH, the images queued this way have a   lower priority than other copy from JukeBox queues.Queues all images for a patient.  i.e. All images for a patient will becopied from the jukebox to the harddrive.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGDFN | LITERAL | 30 | true | This is the patients DFN. | 
| CODE | LITERAL | 10 | true |         ; CODE is a string code for which images to Queue        ;     [\A\ Abatract        ;     [\F\ Full Resolution        ;     [\B\ Big File | 




Generated on January 11th 2017, 6:34:23 am