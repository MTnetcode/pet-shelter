import React from "react";
import "./news.css"
import NewsBox from "./NewsBox.js"
function News() {

  return (
      <div>
          <h3 className="news">News</h3>
        <div className="news-flex">  
        <NewsBox 
        title="Magna efficitur " 
        text="n at iaculis lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus molestie at at dolor. Nulla est justo, pellentesque vel lectus eget, fermentum varius dui. Morbi faucibus quam sed efficitur interdum. Suspendisse in pretium magna. Vivamus nec orci purus. Quisque accumsan dictum urna semper laoreet. Sed id rutrum tellus. In nisi sapien, sagittis faucibus tincidunt et, lacinia id felis. Ut tempor lectus porta, tempus orci ac, feugiat tellus. Suspendisse sagittis libero vitae metus sodales, id semper justo congue. Donec quam lorem, efficitur sit amet ex dapibus, venenatis sodales justo. Nulla arcu tellus, lacinia ac feugiat ac, cursus eget felis. Pellentesque fringilla quam ac ex convallis, vel imperdiet "
        />
        <NewsBox
        title="Sit maximus  " 
        text="Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim, ut commodo elit feugiat et. Maecenas nec enim quis diam faucibus tristique. Nam fermentum, ipsum in suscipit pharetra, mi odio aliquet neque, non iaculis augue elit et libero. Phasellus tempor faucibus faucibus. Sed eu mauris sem. Etiam et varius felis. Donec et libero vitae mauris consectetur egestas. Fusce aliquet, augue non efficitur sodales, turpis nisl consectetur sem, at rutrum lectus libero quis elit. Suspendisse cursus laoreet sapien, in lobortis justo posuere vitae. Aliquam commodo posuere tellus in lacinia. Nullam ac eleifend odio. Donec aliquam semper tellus a condimentum."
        />

        <NewsBox
                title=" Suspendisse lorem " 
                text="Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae nec ante. Cras at est augue. Cras ut interdum elit. Ut malesuada a urna sit amet blandit. Nullam nunc lorem, aliquam at eros laoreet, feugiat bibendum ligula. Aenean congue, massa id aliquet semper, ligula ante tristique nulla, quis posuere dui purus vel urna. Nullam varius, magna nec egestas convallis, orci ex tempus quam, id finibus arcu ipsum fringilla purus. Aenean dapibus suscipit eleifend. Aliquam vel ipsum eu lorem hendrerit iaculis vitae ut lorem. Suspendisse ullamcorper dolor faucibus sem auctor consequat. Ut luctus posuere auctor. Sed non molestie metus."
        />
        <NewsBox
                title=" Tristique efficitur" 
                text="Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar, vel congue ex egestas. Praesent egestas purus dolor, a porta arcu pharetra quis. Sed vestibulum semper ligula, id accumsan orci ornare ut. Donec id pharetra nunc, ut sollicitudin mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dapibus nisl at diam scelerisque luctus. Nam mattis, velit in malesuada maximus, erat ligula eleifend eros, et lacinia nunc ante vel odio."
        />
        <NewsBox 
                title="Posuere interdum  " 
                text="In consequat, quam id sodales hendrerit, eros mi molestie leo, nec lacinia risus neque tristique augue. Proin tempus urna vel congue elementum. Vestibulum euismod accumsan dui, ac iaculis sem viverra eu. Donec convallis, elit vitae ornare cursus, libero purus facilisis felis, a volutpat metus tortor bibendum elit. Integer nec mi eleifend, fermentum lorem vitae, finibus neque. Cras accumsan pretium dignissim. Curabitur a orci lorem. Phasellus tempor dolor vel odio efficitur, ac sollicitudin ipsum feugiat. Proin feugiat aliquet turpis, et rhoncus nibh elementum quis."
        />
        <NewsBox
        title="Posuere interdum " 
        text="Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque tempor, in efficitur justo imperdiet. Etiam a ex at ante tincidunt imperdiet. Nunc congue ex vel nisl viverra, sit amet aliquet lectus ullamcorper. Praesent luctus lacus non lorem elementum, eu tristique sapien suscipit. Sed bibendum, ipsum nec viverra malesuada, erat nisi sodales purus, eget hendrerit dui ligula eu enim. Ut non est nisi. Pellentesque tristique pretium dolor eu commodo. Proin iaculis nibh vitae lectus mollis bibendum. Quisque varius eget urna sit amet luctus. Suspendisse potenti. Curabitur ac placerat est, sit amet sodales risus. Pellentesque viverra dui auctor, ullamcorper turpis pharetra, facilisis quam."
        />
        </div>
      </div>
  );
}

export default News;