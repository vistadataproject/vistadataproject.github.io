---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB VITAL MEAS FILE 

 property | value 
--- | --- 
 label | PSB VITAL MEAS FILE
 tag | RPC
 routine | [PSBVITFL](http://code.osehra.org/dox/Routine_PSBVITFL_source.html)
 return value type | ARRAY
 description | This RPC has been built specifically to process the filing of BCMA Pain Score data. The processing of other VITAL type may be incorporated with some adjustments.    This routine is to service BCMA 3.0 functionality and store VITALs'  data into the VITAL MEASUREMENT FILE - ^GMR(120.5  using the API  GMRVPCE0    Parameters:        Input  -                                DFN   (r) Pointer to the PATIENT (#2) file                        RATE  (r)  BCMA trigger event/transaction                        VTYPE (o) Pointer to GMRV VITAL TYPE FILE (#120.51)                                  (default = Pain [\PN\])                        DTTKN (o) Date/time (FileMan) measurment was taken                                  (default = $$NOW^XLFDT())        Output -         RESULTS(0) = 1                        RESULTS(1) =\1^Pain Score successfully filed\                  or    RESULTS(1) =\-1^ERROR * Pain Score NOT filed                                      successfully\      Process results in the storing of VITAL Measurement rate into the VITAL     MEASUREMENT FILE per the given patient and vital type.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSBDFN | LITERAL |  | true | PSBDFN presents the Pointer to the PATIENT File (#2) of the patient for whom this vital measurement data was entered. | 
| PSBRATE | LITERAL |  | true | PSBRATE presents the numeric value associated with this vital measurement. | 
| PSBVTYPE | LITERAL |  | true | PSBVTYPE presents the type of measurement for this record and is a pointer to the GMRV VITAL TYPE File (#120.51) | 
| PSBDTTKN | LITERAL |  | true | DTTKN   (o) Date/time (FileMan) measurment was taken.  The default is NOW. | 




Generated on January 11th 2017, 6:34:23 am