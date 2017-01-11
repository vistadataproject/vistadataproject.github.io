---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG IMAGE GET PROPERTIES 

 property | value 
--- | --- 
 label | MAGG IMAGE GET PROPERTIES
 tag | GETPROPS
 routine | [MAGGA02](http://code.osehra.org/dox/Routine_MAGGA02_source.html)
 return value type | ARRAY
 description | This remote procedure returns values of one or more image properties(fields of the record of the IMAGE (#2005) or IMAGE AUDIT (#2005.1) file). If a field is tracked (audited), then a previous value of this field on a certain date/time can be requested (see the ADT parameter).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IMGIEN | LITERAL |  | true | IEN of the image record in the IMAGE file (#2005). | 
| PROPLST | LITERAL |  | true | Property names separated by semicolons or one of the following specialcharacters:   *  All supported properties   #  Image indexes (IXCLASS, IXORIGIN, IXPKG,      IXPROC, IXSPEC, and IXTYPE). Below is the list of properties supported by this remote procedure:   Property Name   Field Name and Number  -------------   ------------------------------  CAPTAPP         CAPTURE APPLICATION (8.1)  CRTNDT          CREATION DATE (110)  DTSAVED         DATE/TIME IMAGE SAVED (7)  GDESC           SHORT DESCRIPTION (10)  IDFN            PATIENT (5)  ISTAT           STATUS (113)  ISTATBY         STATUS BY (113.2)  ISTATDT         STATUS DATE (113.1)  ISTATRSN        STATUS REASON (113.3)  IXCLASS         CLASS (1) of the file #2005.83  IXORIGIN        ORIGIN INDEX (45)  IXPKG           PACKAGE INDEX (40)  IXPROC          PROC/EVENT INDEX (43)  IXSPEC          SPEC/SUBSPEC INDEX (44)  IXTYPE          TYPE INDEX (42)  LDESCR          LONG DESCRIPTION (11)  OBJNAME         OBJECT NAME (.01)  OBJTYPE         OBJECT TYPE (3)  PARDF           PARENT DATA FILE# (16)  PARGRD0         PARENT GLOBAL ROOT D0 (17)  PARGRD1         PARENT GLOBAL ROOT D1 (63)  PARIPTR         PARENT DATA FILE IMAGE POINTER (18)  PROC            PROCEDURE (6)  PROCDT          PROCEDURE/EXAM DATE/TIME (15)  SAVEDBY         IMAGE SAVE BY (8)  SENSBY          CONTROLLED BY (112.2)  SENSDT          CONTROLLED DATE (112.1)  SENSIMG         CONTROLLED IMAGE (112) | 
| FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   E  Return external values (default)   I  Return internal values | 
| ADT | LITERAL |  |  | Date/time (internal FileMan value) for retrieving previous values. By default, audit checks are not performed and current values are returned. | 




Generated on January 11th 2017, 6:34:23 am