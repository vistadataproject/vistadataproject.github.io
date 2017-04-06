## Patient Selection
This section will highlight the patient related clinical RPCs that are emulated by nodeVISTA.

* Open the nodeVISTA manager and select RPC Events. 

* Then log into CPRS as ALEXANDER,ROBERT
```
   Access Code: fakedoc1
   Verify Code: 1doc!@#$
   (You are assigned the fictional user account: ALEXANDER,ROBERT)
```

* Once you log into CPRS, the patient search screen will appear. 

    Take a look at the two patient RPC clinical events in the nodeVISTA Manager that have fired.

    ![](images/patient/1.jpg)
    
    The first patient RPC to fire is ORWPT TOP. This RPC determines if there was a patient that the user previously had searched for.
    The second RPC, ORWPT LIST ALL performs the patient search.
    
    If this is your first time running CPRS, ORWPT TOP will not return any patient data.
    
    ![](images/patient/2.jpg)
    
    Otherwise you'll see the previously selected patient.
    
    ![](images/patient/12.jpg)
    
    The ORWPT LIST ALL return data includes the listed patients.
    
    ![](images/patient/4.jpg)
    
    Those two patient RPC calls invoked two MVDM Events. From the nodeVISTA Manager, select MVDM events and observe the two events that were fired.
    
    ![](images/patient/3.jpg)
    
* Back at CPRS, search for or clikc on CARTER,DAVID but don't select him. Click back to RPC Events in the nodeVISTA Manager.

    Observe the three additional RPCs that were invoked by CPRS. 
    
     ![](images/patient/5.jpg)
     
     The ORPRF HASFLG RPC call will determine whether this patient has any special warning flags and will show them before the user selects the patient. 

     The OR GET COMBAT VET call returns if a veteran is char marked as a combat veteran.
     
     ![](images/patient/6.jpg)

* In CPRS, go ahead and select CARTER,DAVID and go into the patient chart. Several more patient related RPCs will be invoked.

     ![](images/patient/7.jpg)
     
     The ORWPT SELECT call selects a patient, by setting a special VistA global but also returns some basic demographic data.
     
     ![](images/patient/8.jpg)
     
     
     
 
