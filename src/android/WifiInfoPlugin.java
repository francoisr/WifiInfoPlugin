package org.apache.cordova.plugin;


import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


import android.content.Context;
import android.net.wifi.ScanResult;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;

public class WifiInfoPlugin extends CordovaPlugin { 

	@Override 
	public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {
		
		Context context = cordova.getActivity().getApplicationContext();
		WifiManager wifiManager = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);

//  FR Leave this for later.  Assume Android keeps doing auto startScan, for now.
//		wifiManager.startScan();
//		try {
//			Thread.sleep(2000);
//		} catch (InterruptedException e1) {
//			// TODO Auto-generated catch block
//			e1.printStackTrace();
//		}

		WifiInfo wifiInfo = wifiManager.getConnectionInfo();
				
		JSONObject obj = new JSONObject();
		try {
			JSONObject activity = new JSONObject();
			activity.put("BSSID", wifiInfo.getBSSID());
			activity.put("HiddenSSID", wifiInfo.getHiddenSSID());
			activity.put("SSID", wifiInfo.getSSID());
			activity.put("MacAddress", wifiInfo.getMacAddress());
			activity.put("IpAddress", wifiInfo.getIpAddress());
			activity.put("NetworkId", wifiInfo.getNetworkId());
			activity.put("RSSI", wifiInfo.getRssi());
			activity.put("LinkSpeed", wifiInfo.getLinkSpeed());
			obj.put("activity", activity); 
			
			JSONArray available = new JSONArray();
	        for (ScanResult scanResult : wifiManager.getScanResults()) {
	        	JSONObject ap = new JSONObject();
	        	ap.put("BSSID", scanResult.BSSID);
	        	ap.put("SSID", scanResult.SSID);
	        	ap.put("frequency", scanResult.frequency);
	        	ap.put("level", scanResult.level);
	        	double s = WifiManager.calculateSignalLevel(scanResult.level, 40)*2.5;
	        	if (s<0){s=0;} ;
	        	if (s>100) {s=100;};
		        ap.put("strength", s);	        		
	        	ap.put("capabilities", scanResult.capabilities);
	        	available.put(ap);
	        }
	        obj.put("available", available); 
	        
			
		} catch (JSONException e) {
			e.printStackTrace();
			callbackContext.error("JSON Exception");
		}
		callbackContext.success(obj);
		return true;
	}
}
