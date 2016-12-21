
##[VDM](TableOfContent.md) --> Patient_ihs-9000001 

 property | value 
--- | --- 
 id | Patient_ihs-9000001
 fmId | 9000001
 label | Patient/ihs
 location | ^AUPNPAT(
 description | This file is IHS's primary patient data file.  The NAME (.01) field of this \rfile is a pointer to the VA's patient file (#2).  Fields in \rcommon between the two dictionaries actually exist only in the VA patient \rfile and are referenced by the IHS patient file as computed fields.  All \rother files containing patient data have backward pointers linking them to \rthis file.  The linkage is by patient name and the internal FileMan gener-\rated number of the ancillary file is the same number used in this file.\r   \rAll applications developed for the RPMS which require patient data will\rpoint to this file.

###Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | This field points to the Patient file (#2) and has the same internal\rnumber as that file.  Thus, the patient's name is the Patient file (#2)\rname. | POINTER |  | REQUIRED, INDEXED | {id:Patient-2} | 
| location_of_home | 1201 | Location Of Home | This is the directions to get to the patients home. | STRING |  |  |  | 
| health_record_no | 4101 | Health Record No. | This multiple contains the different health record identifiers by facility.\rIHS uses a 6 character identifier.\rThe VA uses the social security number which may be up to 10 \rcharacters.   | [OBJECT] |  |  | [Health_Record_No-9000001_41](#health_record_no-9000001_41)  | 

##Health_Record_No-9000001_41 

 property | value 
--- | --- 
 id | Health_Record_No-9000001_41
 label | Health Record No.

###Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| health_record_fac | .01 | Health Record Fac | This field is a pointer to the LOCATION file.  The internal pointer\ris forced into the third subscript for the 9000001.41 subfile.  This\rallows easy lookup by health record number for the logged on\rlocation (facility).\r \rThe complete subscript for 9000001.41 will be (DFN,41,facility pointer,0). | POINTER |  | REQUIRED | {id:Location-9999999_06} | 
| health_record_no | .02 | Health Record No. | This field is used to represent the health record number related to a\rfacility.\r \rIHS uses a 6 character whole number.\r \rVA uses the patient SSN from the Patient File (2). | STRING |  | REQUIRED, INDEXED |  | 
| date_inactivated_deleted | .03 | Date Inactivated/deleted | This is date that the patients entry was inactivated. | DATE-TIME |  |  |  | 
| record_status | .05 | Record Status | This field is used by the IHS Multi-Facility Integration (MFI) package\rto determine whether to stop integrating data at a facility for a \rparticular patient and location facility. | ENUMERATION |  |  | <dl><dt>D</dt><dd>DELETED</dd><dt>I</dt><dd>INACTIVATED</dd><dt>M</dt><dd>MERGED</dd></dl> | 
| stop_integration | .06 | Stop Integration | This field is used by the Mult-Facility Integration (MFI) package,\rcreated by IHS, to indicate this patients data should no longer be\rintegrated by MFI. | BOOLEAN |  |  | {false:1,true:0} | 