
import android.os.Bundle;
import com.epicshaggy.biometric.NativeBiometric;
import com.getcapacitor.BridgeActivity;


import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @override

  public void onCreate(Bundle savedInstanceState){
    registerPlugin(NativeBiometric.class);
    super.onCreate(savedInstanceState);
  }
}
